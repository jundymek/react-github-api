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
        return item.language === null;
      });
    } else {
      return props.data.filter(item => {
        return item.language === value;
      });
    }
  };

  const renderRepositoryBox = (item, isMirrored, key) => {
    return (
      <RepositoryBox key={key} item={item} isMirrored={isMirrored} />
    );
  };

  return (
    <StyledSection>
      <RepositoryUserBox
        repositoryCounter={data.length}
        owner={data[0]["owner"]}
        technologies={technologies}
        handleChangeSelectedValue={handleChangeSelectedValue}
        repositoryDataLength={props.repositoryDataLength}
        data={props.data}
      />
      <RepositoryList 
        data={data} 
        renderRepositoryBox={renderRepositoryBox}
      />
    </StyledSection>
  );
}

export default RepositoryListManager;
