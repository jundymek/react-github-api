import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RepositoryList } from "./RepositoryList";
import RepositoryUserBox from "./RepositoryUserBox";
import RepositoryBox from "./RepositoryBox";
import PropTypes from 'prop-types';

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

function RepositoryListManager({data, technologiesToSort, repositoryDataLength}) {
  const [repositoriesData, setData] = useState(data);

  const handleChangeSelectedValue = e => {
    console.log(e.target.value);
    setData(getStringifyFilteredData(e.target.value));
  };

  useEffect(() => {
    setData(data);
  }, [data]);

  const getStringifyFilteredData = value => {
    if (value === "all") {
      return data;
    } else if (value === "Other") {
      return data.filter(item => {
        return item.language === null;
      });
    } else {
      return data.filter(item => {
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
        repositoryCounter={repositoriesData.length}
        owner={repositoriesData[0]["owner"]}
        technologies={technologiesToSort}
        handleChangeSelectedValue={handleChangeSelectedValue}
        repositoryDataLength={repositoryDataLength}
        data={data}
      />
      <RepositoryList 
        data={repositoriesData} 
        renderRepositoryBox={renderRepositoryBox}
      />
    </StyledSection>
  );
}

RepositoryListManager.propTypes = {
  data: PropTypes.array,
  technologiesToSort: PropTypes.array,
  repositoryDataLength: PropTypes.number
}

export default RepositoryListManager;
