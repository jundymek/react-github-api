export function handleFetchUserData(inputData) {
    return fetch(`https://api.github.com/users/${inputData}`).then(resp => resp.json());
  }
  