import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RepositoryList } from "./RepositoryList";
import RepositoryUserBox from "./RepositoryUserBox";
import RepositoryBox from "./RepositoryBox";
import PropTypes from 'prop-types';
import { getFilteredDataByTechnology } from "./helpers/getFilteredDataByTechnology";

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

function RepositoryListManager({data, technologiesToSort, repositoryDataLength, user}) {
  const [repositoriesData, setData] = useState(data);

  const handleChangeSelectedValue = e => {
    console.log(e.target.value);
    setData(getFilteredDataByTechnology(e.target.value, data));
  };

  useEffect(() => {
    setData(data);
  }, [data]);

  

  const renderRepositoryBox = (item, isMirrored, key) => {
    return (
      <RepositoryBox key={key} item={item} isMirrored={isMirrored} />
    );
  };

  return (
    // console.log(user['login']),
    <StyledSection>
      <RepositoryUserBox
        repositoryCounter={repositoriesData.length}
        owner={user}
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
  repositoryDataLength: PropTypes.number,
  user: PropTypes.object
}

export default RepositoryListManager;


