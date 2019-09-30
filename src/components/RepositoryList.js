import React from 'react';
import styled from 'styled-components';
import RepositoryBox from './RepositoryBox';

const StyledSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 50px;
`
const StyledH2 = styled.h2`
    font-weight: 700;
    text-align: center;
`

function RepositoryList({data}){
    return(
        <StyledSection>
            {data ? 
                <StyledH2>Repositories</StyledH2>
                : <StyledH2>No data</StyledH2>
            }
            {data ? 
            data.map(item => 
                <RepositoryBox 
                    title={item[0]["title"]} 
                    url={item[0]["url"]}
                    createDate={item[0]["cration_date"]}
                    updateDate={item[0]["modification_date"]}
                    description={item[0]["description"]}
                    />
                    )
            : 
            ''}
        </StyledSection>
    )
    } 

export default RepositoryList;
