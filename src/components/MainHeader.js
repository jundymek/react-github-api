import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const StyledHeader = styled.header`
  display: flex;
  background-color: #ccc;
  padding: 40px 20px;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  margin-top: -50px;
  height: 400px;
  clip-path: polygon(0 0, 100% 0, 100% 74%, 0 99%);
  background: #000;
  color: #fff;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledH1 = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;
  max-width: 60%;
  padding: 0;
  @media (max-width: 768px) {
    margin-top: 0px;
    max-width: 100%;
    text-align: center;
  }
`;

function MainHeader(props) {
  const { handleSearchBarDataChange } = props;
  return (
    <StyledHeader>
      <StyledH1>Moje repozytoria githuba - React</StyledH1>
      <SearchBar handleSearchBarDataChange={handleSearchBarDataChange} />
    </StyledHeader>
  );
}

export default MainHeader;
