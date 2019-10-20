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
    return data.filter(data => (language !== "Other" ? data["language"] === language : data["language"] === null))
      .length;
  }
}
