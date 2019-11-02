import React, { useState } from "react";
import styled from "styled-components";
import { RepositoryList } from "./RepositoryList";
import RepositoryUserBox from "./RepositoryUserBox";
import RepositoryBox from "./RepositoryBox";
import PropTypes from "prop-types";
import { useSetFilteredData } from "./customHooks/useSetFilteredData";

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

function RepositoryListManager({ data }) {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const filteredData = useSetFilteredData(data, selectedFilter)

  const handleChangeSelectedValue = e => {
    setSelectedFilter(e.target.value)
  };

  const renderRepositoryBox = (item, isMirrored, key) => {
    return <RepositoryBox key={key} item={item} isMirrored={isMirrored} />;
  };

  return (
    <StyledSection>
      <RepositoryUserBox
        handleChangeSelectedValue={handleChangeSelectedValue}
        data={data}
      />
      <RepositoryList 
        repositories={filteredData} 
        renderRepositoryBox={renderRepositoryBox} 
      />
    </StyledSection>
  );
}

RepositoryListManager.propTypes = {
  data: PropTypes.object.isRequired,
};

export default RepositoryListManager;
