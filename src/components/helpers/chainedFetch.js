import { handleFetchData } from "./handleFetchData";
import { handleFetchUserData } from "./handleFetchUserData";

export function chainedFetch(value) {
  return Promise.resolve({
    input: value,
    user: null,
    repositories: []
  })
    .then(result => {
      console.log("FETHING-user");
      return handleFetchUserData(result.input).then(resp => {
        if (resp.message && resp.message.includes("Not Found")) {
          return {
            ...result,
            user: null,
            repositories: []
          };
        } else {
          console.log(resp.message);
          return {
            ...result,
            user: resp
          };
        }
      });
    })
    .then(result => {
      console.log(result);
      console.log("FETHING-data");
      if (result.user !== null) {
        console.log(result);
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
