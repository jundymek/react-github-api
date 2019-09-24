import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
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
            <ul>
            {data ? 
            data.map(item => <li>{item[0]['url']} {item[0]['title']}</li>)
            : 
            ''}
            </ul>
        </StyledSection>
    )
    } 

export default RepositoryList;
