import React, { useState } from "react";
import styled from "styled-components";
import img from "../img/code.jpg";
import img1 from "../img/code1.jpg";
import img2 from "../img/code2.jpg";
import img3 from "../img/computer.jpg";

const images = [`${img}`, `${img1}`, `${img2}`, `${img3}`];

const StyledInput = styled.input`
  height: 2.5rem;
  width: 20rem;
  padding: 0.5rem;
  border: 1px solid #000;
  border-radius: 2px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-wrap: nowrap;
  max-width: 300px;
  width: 100%;
`;
const colors = ["red", "blue", "green", "yellow"];
const StyledButton = styled.button`
  height: 2.5rem;
  padding: 0.5rem;
  border: none;
  background-color: #000;
  border: 1px solid #fff;
  color: #fff;
  /* color: ${colors[Math.floor(Math.random() * colors.length)]}; */
  width: 5rem;
  border-radius: 2px;
  transition: transform 0.3s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;
function SearchBar(props) {
  const [inputValue, setInputValue] = useState("");

  const handleFetchData = (e, data) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${data}/repos?sort=updated_at&order=desc`)
      .then(resp => resp.json())
      .then(resp => {
        if (resp.message && resp.message.includes("Not Found")) {
          console.log(resp);
        } else {
          console.log(resp);
          const repos = resp.map(item => item.html_url);
          console.log(repos);
          console.log(resp);
          getWantedData(resp);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getTechnologiesToSort = data => {
    const technologies = [];
    data.map(item => {
      technologies.push(item[0].language !== null ? item[0].language : "Other");
      return technologies;
    });
    return [...new Set(technologies)];
  };

  const getWantedData = data => {
    const dataObjects = data.map(item => [
      {
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
      }
    ]);
    console.log(dataObjects);
    props.handleTechnologiesToSortChange(getTechnologiesToSort(dataObjects));
    props.handleSearchBarDataChange(dataObjects);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleFetchData(e, inputValue);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput type="text" placeholder="Search" onChange={e => setInputValue(e.target.value)} />
      <StyledButton>Search</StyledButton>
    </StyledForm>
  );
}
export default SearchBar;
