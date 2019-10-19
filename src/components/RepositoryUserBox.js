import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import img from "../img/github_icon_small.png";
import { RepositoryLanguagesCounter } from "./RepositoryLanguagesCounter";

export const BoxWrapper = styled.section`
  display: flex;
  max-width: 600px;
  min-height: 400px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  margin: 40px 0 0 0;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
  padding-bottom: 20px;
`;

export const UserImage = styled.img`
  max-width: 400px;
  max-height: 400px;
  width: 80%;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-right: 20px;
`;

export const UserBoxUl = styled.ul`
  list-style-type: none;
  margin-left: -40px;
  &::before {
    position: absolute;
    margin-top: -20px;
    content: "";
    width: 50px;
    height: 10px;
    background: #7bd338;
  }
`;

const typing = keyframes`
  0% {
      width: 0%;
      opacity: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
      width: 100%;
      opacity: 1;
  }
`;

export const StyledH2 = styled.h2`
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  font-weight: 700;
  margin: 20px 0;
  text-align: center;
  animation: ${typing} 3.5s steps(40, end);
`;

export const UserBoxLi = styled.li`
  list-style-type: none;
  &::before {
    content: "✓";
    padding-right: 10px;
    width: 50px;
    height: 10px;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

function RepositoryUserBox({ owner, technologies, handleChangeSelectedValue, repositoryDataLength, data }) {
  const filterOptions = technologies.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  const [selectedFilterOption, setSelectedFilterOption] = useState("all");

  return (
    <BoxWrapper>
      <StyledH2>Repositories of {owner.login}</StyledH2>
      <UserImage src={owner.avatar_url} />
      <UserBoxUl>
        <UserBoxLi>Number of repositories: {repositoryDataLength}</UserBoxLi>
        <ol>
          <RepositoryLanguagesCounter
            data={data}
            technologies={technologies}
            repositoryDataLength={repositoryDataLength}
          />
        </ol>

        <UserBoxLi>
          Github link:{" "}
          <a href="https://github.com/jundymek" aria-label="Link to github profile">
            <Icon src={img} alt="Github icon" />
          </a>
        </UserBoxLi>
      </UserBoxUl>
      <StyledLabel htmlFor="language">Sort by language</StyledLabel>
      <select
        style={{ background: "#7bd338", color: "#000" }}
        id="language"
        onChange={e => {
          handleChangeSelectedValue(e);
          setSelectedFilterOption(e.target.value);
        }}
        value={selectedFilterOption}
      >
        <option value="all">All</option>
        {filterOptions}
      </select>
    </BoxWrapper>
  );
}

export default RepositoryUserBox;
