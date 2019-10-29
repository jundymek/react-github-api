import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img from "../img/code.jpg";
import img1 from "../img/code1.jpg";
import img2 from "../img/code2.jpg";
import img3 from "../img/computer.jpg";
import { getTechnologiesToSort } from "./helpers/getTechnologiesToSort";
import { getWantedData } from "./helpers/getWantedData";
import PropTypes from "prop-types";
import { handleFetchData } from "./helpers/handleFetchData";
import { handleFetchUserData } from "./helpers/handleFetchUserData";
import { chainedFetch } from "./helpers/chainedFetch";

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

function SearchBar({
  setIsUserNotFound,
  handleTechnologiesToSortChange,
  handleSearchBarDataChange,
  handleRepositoryDataLengthChange,
  setUserData
}) {
  const [inputValue, setInputValue] = useState("");
  const [isCheckboxPressed, setIsCheckboxPressed] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setisLoading(true);
    chainedFetch(inputValue)
      .then(({ user, repositories }) => {
        console.log(user);
        setIsUserNotFound(false);
        setUserData(user);
        const wantedData = getWantedData(repositories, isCheckboxPressed);
        handleTechnologiesToSortChange(getTechnologiesToSort(wantedData));
        handleSearchBarDataChange(wantedData);
        handleRepositoryDataLengthChange(wantedData.length);
      })
      .catch(error => {
        setIsUserNotFound(error === "Not Found");
        console.log(error);
      })
      .finally(() => {
        setisLoading(false);
      });
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   setisLoading(true);
  //   handleFetchUserData(inputValue)
  //     .then(resp => {
  //       console.log(resp)
  //       // if (resp.message && resp.message.includes("Not Found")) {
  //       //   console.log(resp.message)
  //       //   setIsUserNotFound(true);
  //       //   throw new Error('error');
  //       // } else {
  //       //   setUserData(resp)
  //       //   console.log(resp)
  //       //   setIsUserNotFound(false);
  //       // }
  //     }).then(() => {
  //           handleFetchData(inputValue).then(resp => {
  //             const wantedData = getWantedData(resp, isCheckboxPressed);
  //             handleTechnologiesToSortChange(getTechnologiesToSort(wantedData));
  //             handleSearchBarDataChange(wantedData);
  //             handleRepositoryDataLengthChange(wantedData.length);
  //           });
  //           setisLoading(false);
  //     }).catch(err => {
  //       console.log(err)
  //       setisLoading(false);
  //       }
  //     )
  // };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="search">List specified user repositories</label>
      <InputWrapper>
        <StyledInput
          id="search"
          type="text"
          aria-label="search-input"
          placeholder="Search"
          onChange={e => setInputValue(e.target.value)}
        />
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
  handleRepositoryDataLengthChange: PropTypes.func
};

export default SearchBar;
