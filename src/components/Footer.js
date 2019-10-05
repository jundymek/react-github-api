import React from 'react';
import styled from 'styled-components';
import img from '../img/github_icon_small.png';

const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  height: 10vh;
  align-items: center;
  justify-content: center;
  background: black;
  color: #fff;
  clip-path: polygon(10% 0, 90% 0, 100% 100%, 0% 100%);
`
const Paragraph = styled.p`
    justify-self: flex-start;
    font-size: 14px;
`

const Icon = styled.img`
    width: 40px;
    height: 40px;
`

function Footer() {
    return (
        <StyledFooter>
        <Paragraph>Made by jundymek in {new Date().getFullYear()}</Paragraph> 
        <a href="https://github.com/jundymek" aria-label="Link to github profile"><Icon src={img} alt="Github icon"/></a>
        </StyledFooter>
    )
}

export default Footer;
