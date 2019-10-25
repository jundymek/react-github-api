import React, { useState } from "react";
import styled from "styled-components";
import img from "../img/code.jpg";
import img1 from "../img/code1.jpg";
import img2 from "../img/code2.jpg";
import img3 from "../img/computer.jpg";
import { getTechnologiesToSort } from "./helpers/getTechnologiesToSort";
import { getWantedData } from "./helpers/getWantedData";
import PropTypes from 'prop-types';


export const images = [`${img}`, `${img1}`, `${img2}`, `${img3}`];

const StyledInput = styled.input`
  height: 2.5rem;
  width: 20rem;
  padding: 0.5rem;
  border: 1px solid #000;
  border-radius: 2px;
`;

const InputWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

const CheckboxLabel = styled.label`
  font-size: 10px;
  margin-top: 2px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  max-width: 300px;
  width: 100%;
`;

const StyledButton = styled.button`
  height: 2.5rem;
  padding: 0.5rem;
  border: none;
  background-color: #000;
  border: 1px solid #fff;
  color: #fff;
  width: 5rem;
  border-radius: 2px;
  transition: transform 0.3s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;

function SearchBar({setIsUserNotFound, handleTechnologiesToSortChange, handleSearchBarDataChange, handleRepositoryDataLengthChange}) {
  const [inputValue, setInputValue] = useState("");
  const [isCheckboxPressed, setIsCheckboxPressed] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const handleFetchData = (e, data) => {
    e.preventDefault();
    setisLoading(true);
    fetch(`https://api.github.com/users/${data}/repos?sort=updated_at&order=desc`)
      .then(resp => resp.json())
      .then(resp => {
        if (resp.message && resp.message.includes("Not Found")) {
          console.log(resp);
          setIsUserNotFound(true);
          setisLoading(false);
        } else {
          console.log(resp);
          setIsUserNotFound(false);
          const wantedData = getWantedData(resp, isCheckboxPressed);
          console.log(wantedData);
          handleTechnologiesToSortChange(getTechnologiesToSort(wantedData));
          handleSearchBarDataChange(wantedData);
          handleRepositoryDataLengthChange(wantedData.length);
          setisLoading(false);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleFetchData(e, inputValue);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="search">List specified user repositories</label>
      <InputWrapper>
        <StyledInput id="search" type="text" placeholder="Search" onChange={e => setInputValue(e.target.value)} />
        <StyledButton>Search</StyledButton>
      </InputWrapper>
      <InputWrapper>
        <input
          onChange={() => setIsCheckboxPressed(prevState => !prevState)}
          type="checkbox"
          name="checkbox"
          id="checkbox"
        />
        <CheckboxLabel htmlFor="checkbox">Search only for repositories with working homepage</CheckboxLabel>
      </InputWrapper>
      {isLoading ? "Loading..." : null}
    </StyledForm>
  );
}

SearchBar.propTypes = {
  setIsUserNotFound: PropTypes.func,
  handleTechnologiesToSortChange: PropTypes.func,
  handleSearchBarDataChange: PropTypes.func,
  handleRepositoryDataLengthChange: PropTypes.func,
}

export default SearchBar;
