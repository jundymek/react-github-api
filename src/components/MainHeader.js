import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
  display: flex;
  background-color: #ccc;
  padding: 40px 20px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -50px;
  transition: min-height 1s ease-out; 
  min-height: ${props => props.smallerHeight ? '400px': '100vh'};
  clip-path: polygon(0 0, 100% 0, 100% 74%, 0 99%);
  background: #000;
  color: #fff;
  @media (max-width: 768px) {
    min-height: ${props => props.smallerHeight ? '400px': '90vh'};
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

function MainHeader({ smallerHeight, dataChange }) {
  return (
    <StyledHeader smallerHeight={smallerHeight}>
      <StyledH1>Github repos - API</StyledH1>
      <SearchBar 
        dataChange={dataChange}  
      />
    </StyledHeader>
  );
}

MainHeader.propTypes = {
  smallerHeight: PropTypes.bool,
  dataChange: PropTypes.func,
}

export default MainHeader;
