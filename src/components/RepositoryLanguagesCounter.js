import React from "react";
import PropTypes from 'prop-types';

export function RepositoryLanguagesCounter({ technologies, data }) {
  return technologies ? technologies.map((value, index) => {
    return (
      <li key={index}>
        {value}: {countTechnologies(value)}
      </li>
    );
  }) : null;
  function countTechnologies(language) {
    return data.filter(data => (language !== "Other" ? data["language"] === language : data["language"] === null))
      .length;
  }
}

RepositoryLanguagesCounter.propTypes = {
  technologies: PropTypes.array,
  data: PropTypes.array
}
