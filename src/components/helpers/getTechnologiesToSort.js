export function getTechnologiesToSort(data) {
    const technologies = data.repositories.map(item => {
      return item.language !== null ? item.language : "Other";
    });
    return [...new Set(technologies)];
}
