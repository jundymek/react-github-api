import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const StyledHeader = styled.header`
    display: flex;
    background-color: #ccc;
    padding: 40px 20px;
    justify-content: space-between;
    align-items: center;
`;

const StyledH1 = styled.h1`
    font-weight: 700;
    font-size: 2.5rem;
    margin: 0;
    padding: 0;
`;


function MainHeader(props) {
    const {handleSearchBarDataChange} = props
    return (
      <StyledHeader>
        <StyledH1>Moje repozytoria githuba - React</StyledH1>
        <SearchBar handleSearchBarDataChange={handleSearchBarDataChange}/>
      </StyledHeader>
    );
  }

export default MainHeader;
