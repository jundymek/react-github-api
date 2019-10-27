export function handleFetchData(inputData) {
  return fetch(`https://api.github.com/users/${inputData}/repos?sort=updated_at&order=desc`).then(resp => resp.json());
}
