import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RepositoryList } from "./RepositoryList";
import RepositoryUserBox from "./RepositoryUserBox";
import RepositoryBox from "./RepositoryBox";
import PropTypes from "prop-types";
import { getFilteredDataByTechnology } from "./helpers/getFilteredDataByTechnology";
import { getTechnologiesToSort } from "./helpers/getTechnologiesToSort";

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

function RepositoryListManager({ data }) {
  const [filreredData, setFilreredData] = useState(data.repositories);

  useEffect(() => {
    setFilreredData(getFilteredDataByTechnology("all", data.repositories));
  }, [data]);

  const handleChangeSelectedValue = e => {
    setFilreredData(getFilteredDataByTechnology(e.target.value, data.repositories));
  };

  const renderRepositoryBox = (item, isMirrored, key) => {
    return <RepositoryBox key={key} item={item} isMirrored={isMirrored} />;
  };

  return (
    <StyledSection>
      <RepositoryUserBox
        technologies={getTechnologiesToSort(data)}
        handleChangeSelectedValue={handleChangeSelectedValue}
        data={data}
      />
      <RepositoryList 
        repositories={filreredData} 
        renderRepositoryBox={renderRepositoryBox} 
      />
    </StyledSection>
  );
}

RepositoryListManager.propTypes = {
  data: PropTypes.object,
  technologiesToSort: PropTypes.array,
};

export default RepositoryListManager;
