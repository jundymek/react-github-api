import { images } from "../SearchBar";

export function getWantedData(data, isCheckboxPressed) {
  let dataObjects = {};
  if (isCheckboxPressed) {
    console.log("CHECKBOX PRESSED fetch");
    dataObjects = data.filter(item => {
      return item.homepage;
    });
  }
  else {
    dataObjects = data;
  }
  const wantedData = dataObjects.map(item => {
    return {
      url: item.html_url,
      img: `${images[Math.floor(Math.random() * images.length)]}`,
      title: item.name,
      creation_date: item.created_at.slice(0, 10),
      modification_date: item.updated_at.slice(0, 10),
      description: item.description,
      language: item.language,
      key: item.id,
      github_io: item.homepage,
      owner: item.owner
    };
  });
  return wantedData;
}
