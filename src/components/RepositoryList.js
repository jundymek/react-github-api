import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import RepositoryBox from "./RepositoryBox";
import img from "../img/github_icon_small.png";

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

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
  margin-right: 20px;
`;

const UserBoxUl = styled.ul`
  list-style-type: none;
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

const StyledH2 = styled.h2`
  overflow: hidden;
  white-space: nowrap; 
  margin: 0 auto; 
  font-weight: 700;
  margin: 20px 0;
  text-align: center;
  animation: ${typing} 3.5s steps(40, end);
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

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

function RepositoryOwnerBox({ owner, technologies, handleChangeSelectedValue, repositoryCounter }) {
  const filterOptions = technologies.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  const [repositoryCounterAll, setRepositoryCounterAll] = useState(repositoryCounter);

  useEffect(() => {
    setRepositoryCounterAll(repositoryCounter);
  }, [repositoryCounter]);
  return (
    <BoxWrapper>
      <StyledH2>Repositories of {owner.login}</StyledH2>
      <UserBoxUl>
        <UserBoxLi>Number of repositories: {repositoryCounterAll}</UserBoxLi>
        <UserBoxLi>
          Github link:{" "}
          <a href="https://github.com/jundymek" aria-label="Link to github profile">
            <Icon src={img} alt="Github icon" />
          </a>
        </UserBoxLi>
      </UserBoxUl>
      <UserImage src={owner.avatar_url} />
      <StyledLabel htmlFor="language">Sort by technology</StyledLabel>
      <select
        style={{ background: "#7bd338", color: "#000" }}
        id="language"
        onChange={e => handleChangeSelectedValue(e)}
      >
        <option value="all">All</option>
        {filterOptions}
      </select>
    </BoxWrapper>
  );
}

function RepositoryList(props) {
  const [data, setData] = useState(props.data);
  const technologies = props.technologiesToSort;

  const handleChangeSelectedValue = e => {
    console.log(e.target.value);
    setData(getStringifyFilteredData(e.target.value));
  };

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  const getStringifyFilteredData = value => {
    if (value === "all") {
      return props.data;
    } else if (value === "Other") {
      return props.data.filter(item => {
        return item[0].language === null;
      });
    } else {
      return props.data.filter(item => {
        return item[0].language === value;
      });
    }
  };

  return (
    <StyledSection>
      <RepositoryOwnerBox
        repositoryCounter={data.length}
        owner={data[0][0]["owner"]}
        technologies={technologies}
        handleChangeSelectedValue={handleChangeSelectedValue}
      />
      {data.map((item, index) => {
        return index % 2 === 0 ? (
          <RepositoryBox
            key={item[0]["key"]}
            img={item[0]["img"]}
            title={item[0]["title"]}
            url={item[0]["url"]}
            createDate={item[0]["creation_date"]}
            updateDate={item[0]["modification_date"]}
            description={item[0]["description"]}
            language={item[0]["language"]}
            github_io={item[0]["github_io"]}
          />
        ) : (
          <RepositoryBox
            key={item[0]["key"]}
            img={item[0]["img"]}
            title={item[0]["title"]}
            url={item[0]["url"]}
            createDate={item[0]["creation_date"]}
            updateDate={item[0]["modification_date"]}
            description={item[0]["description"]}
            language={item[0]["language"]}
            github_io={item[0]["github_io"]}
            isMirrored
          />
        );
      })}
    </StyledSection>
  );
}

export default RepositoryList;
