
export function RepositoryList({ repositories, renderRepositoryBox}) {
  return repositories.map((repository, index) => {
    return index % 2 === 0 ? (
        renderRepositoryBox(repository, isMirrored=false, index)
    ) : (
        renderRepositoryBox(repository, isMirrored=true, index)
    );
  });
}
