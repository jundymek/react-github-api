import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const StyledHeader = styled.header`
    display: flex;
    background-color: #ccc;
    padding: 20px;
    justify-content: space-between;
`;

const StyledH1 = styled.h1`
    font-weight: 700;
    font-size: 2.5rem;
`;


function MainHeader() {
    return (
      <StyledHeader>
        <StyledH1>Moje repozytoria githuba - React</StyledH1>
        <SearchBar />
      </StyledHeader>
    );
  }

export default MainHeader;
