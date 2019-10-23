export function getTechnologiesToSort(data) {
  const technologies = [];
  data.map(item => {
    technologies.push(item.language !== null ? item.language : "Other");
    return technologies;
  });
  return [...new Set(technologies)];
}
