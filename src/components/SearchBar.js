import React, { useState } from "react";
import styled from "styled-components";
import img from "../img/code.jpg";
import img1 from "../img/code1.jpg";
import img2 from "../img/code2.jpg";
import img3 from "../img/computer.jpg";
import { getWantedData } from "./helpers/getWantedData";
import PropTypes from "prop-types";
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

function SearchBar({ dataChange }) {
  const [inputValue, setInputValue] = useState("");
  const [isCheckboxPressed, setIsCheckboxPressed] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setisLoading(true);
    chainedFetch(inputValue)
      .then(resp => {
        if (resp) {
          if (resp.repositories.length) {
            resp.repositories = getWantedData(resp.repositories, isCheckboxPressed);
            dataChange(resp);
          } else {
            dataChange({ input: inputValue, user: resp.user, repositories: [] })
          }
        }
      })
      .catch(error => {
        dataChange({ input: "", user: null, repositories: [] });
        console.log(error);
      })
      .finally(() => {
        setisLoading(false);
      });
  };

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
          required
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
  dataChange: PropTypes.func
};

export default SearchBar;
