import { handleFetchData } from "./handleFetchData";
import { handleFetchUserData } from "./handleFetchUserData";

export function chainedFetch(value) {
  return Promise.resolve({
    input: value,
    user: null,
    repositories: []
  })
    .then(result => {
      return handleFetchUserData(result.input).then(resp => {
        if (resp.message && resp.message.includes("Not Found")) {
          return {
            ...result,
            user: null,
            repositories: []
          };
        } else {
          return {
            ...result,
            user: resp
          };
        }
      });
    })
    .then(result => {
      if (result.user !== null) {
        return handleFetchData(result.input).then(data => {
          return {
            ...result,
            repositories: data
          };
        });
      } else {
        return {
          ...result
        };
      }
    });
}
