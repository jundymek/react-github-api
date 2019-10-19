
export function RepositoryList({ data, renderLeft, renderRight }) {
  return data.map((item, index) => {
    return index % 2 === 0 ? (
      renderLeft(item)
    ) : (
      renderRight(item)
    );
  });
}
