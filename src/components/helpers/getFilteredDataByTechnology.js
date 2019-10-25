export function getFilteredDataByTechnology(value, data) {
  if (value === "all") {
    return data;
  } else if (value === "Other") {
    return data.filter(item => {
      return item.language === null;
    });
  } else {
    return data.filter(item => {
      return item.language === value;
    });
  }
}
