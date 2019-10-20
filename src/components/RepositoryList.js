
export function RepositoryList({ data, renderRepositoryBox, isMirrored}) {
  return data.map((item, index) => {
    return index % 2 === 0 ? (
        renderRepositoryBox(item, isMirrored=false, index)
    ) : (
        renderRepositoryBox(item, isMirrored=true, index)
    );
  });
}
