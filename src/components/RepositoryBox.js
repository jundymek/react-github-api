import React from "react";
import styled from "styled-components";
import img from "../img/code.jpg";

const ContentLeft = styled.div`
  transform: translateX(-100%);
  background: rgba(#000, 0.2);
  width: 100%;
  transition: transform 0.3s ease-in;
  border-top-left-radius: 12px;
`;

const Photo = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  transition: transform 0.3s ease-in, opacity 0.3s ease-in;
`;

const StyledSection = styled.section`
  display: flex;
  max-width: 800px;
  min-height: 300px;
  width: 90%;
  margin: 40px auto 0 auto;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  overflow: hidden;
  &:hover ${ContentLeft} {
    transform: translateX(0);
  }
  &:hover ${Photo} {
    opacity: 0.9;
    transform: rotate(10deg) scale(1.3);
  }
`;

const LeftSection = styled.div`
  width: 40%;
  color: #fff;
  padding: 20px;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
  position: relative;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 30px;
`;

const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  color: #000;
  text-transform: uppercase;
`;

const Description = styled.p`
  margin-top: 40px;
  position: relative;
  &::before {
    position: absolute;
    margin-top: -20px;
    content: "";
    width: 50px;
    height: 10px;
    background: #7bd338;
  }
`;

const Created = styled.p``;

const GithubLink = styled.p`
  color: #7bd338;
  align-self: flex-end;
  text-decoration: underline;
  transition: transform 0.3s ease-in;
  position: relative;
  &:hover {
    transform: translateX(-10px);
  }
  &:hover::after {
    display: inline-block;
    opacity: 1;
    transition: opacity 0.3s ease-in;
  }
  &:after {
    position: absolute;
    content: "➢";
    font-size: 20px;
    margin-left: 10px;
    opacity: 0;
    transform: opacity;
  }
`;

class RepositoryBox extends React.Component {
  render() {
    return (
      <StyledSection>
        <LeftSection>
          <Photo />
          <ContentLeft>
            <Created>Created 📅: 11/10/2019</Created>
            <Created>Updated 📅: 11/10/2019</Created>
          </ContentLeft>
        </LeftSection>
        <RightSection>
          <Title>orlen-first-aid</Title>
          <Description>
            The project was inspired by one of the tasks for the Orlen company during the third edition of HackYeah.
            Simple application related to the topic of first aid in the event of road accidents. The application
            describes step by step actions that must be performed during an event.
          </Description>
          <GithubLink>Read more</GithubLink>
        </RightSection>
      </StyledSection>
    );
  }
}

export default RepositoryBox;
