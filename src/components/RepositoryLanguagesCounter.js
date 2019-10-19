import React from "react";

export function RepositoryLanguagesCounter({ technologies, data }) {
  return technologies.map((value, index) => {
    return (
      <li key={index}>
        {value}: {countTechnologies(value)}
      </li>
    );
  });
  function countTechnologies(language) {
    return data.filter(data => (language !== "Other" ? data[0]["language"] === language : data[0]["language"] === null))
      .length;
  }
}
