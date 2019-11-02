
export function RepositoryList({ repositories, renderRepositoryBox}) {
  return repositories.map((repository, index) => {
    return index % 2 === 0 ? (
        renderRepositoryBox(repository, false, index)
    ) : (
        renderRepositoryBox(repository, true, index)
    );
  });
}
