import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RepositoryList } from "./RepositoryList";
import RepositoryUserBox from "./RepositoryUserBox";
import RepositoryBox from "./RepositoryBox";

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

function RepositoryListManager(props) {
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

  const renderRepositoryLeft = item => {
    return (
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
    );
  };

  const renderRepositoryRight = item => {
    return (
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
    );
  };

  return (
    <StyledSection>
      <RepositoryUserBox
        repositoryCounter={data.length}
        owner={data[0][0]["owner"]}
        technologies={technologies}
        handleChangeSelectedValue={handleChangeSelectedValue}
        repositoryDataLength={props.repositoryDataLength}
        data={props.data}
      />
      <RepositoryList 
        data={data} 
        renderLeft={renderRepositoryLeft} 
        renderRight={renderRepositoryRight} 
      />
    </StyledSection>
  );
}

export default RepositoryListManager;
