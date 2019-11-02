import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img from "../img/github_icon_small.png";
import { RepositoryLanguagesCounter } from "./RepositoryLanguagesCounter";
import PropTypes from "prop-types";
import { getTechnologiesToSort } from "./helpers/getTechnologiesToSort";

const BoxWrapper = styled.section`
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

const UserImage = styled.img`
  max-width: 400px;
  max-height: 400px;
  width: 80%;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  display: block;
`;

const UserBoxUl = styled.ul`
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

const StyledH2 = styled.h2`
  overflow: hidden;
  margin: 0 auto;
  font-weight: 700;
  margin: 20px 0;
  text-align: center;
`;

const UserBoxLi = styled.li`
  list-style-type: none;
  &::before {
    content: "✓";
    padding-right: 10px;
    width: 50px;
    height: 10px;
  }
`;

const StyledSelect = styled.select`
  background: "#7bd338";
  color: "#000";
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

function RepositoryUserBox({ handleChangeSelectedValue, data }) {
  const filterOptions = data.repositories
    ? getTechnologiesToSort(data).map((item, index) => {
        return (
          <option key={index} value={item}>
            {item}
          </option>
        );
      })
    : null;

  const [selectedFilterOption, setSelectedFilterOption] = useState("all");

  useEffect(() => {
    setSelectedFilterOption("all");
  }, [data]);

  return (
    <BoxWrapper>
      <StyledH2>Repositories of {data.user.login}</StyledH2>
      <UserImage src={data.user.avatar_url} />
      <UserBoxUl>
        <UserBoxLi>Number of repositories: {data.repositories.length}</UserBoxLi>
        <ol>
          <RepositoryLanguagesCounter
            data={data.repositories}
            technologies={getTechnologiesToSort(data)}
          />
        </ol>

        <UserBoxLi>
          Github link:{" "}
          <a href={data.user.html_url} aria-label="Link to github profile">
            <Icon src={img} alt="Github icon" />
          </a>
        </UserBoxLi>
      </UserBoxUl>
      <StyledLabel htmlFor="language">Sort by language</StyledLabel>
      <StyledSelect
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
      </StyledSelect>
    </BoxWrapper>
  );
}

RepositoryUserBox.propTypes = {
  handleChangeSelectedValue: PropTypes.func,
  data: PropTypes.object
};

export default RepositoryUserBox;
