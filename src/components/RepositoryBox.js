import React from "react";
import styled from "styled-components";
import img from "../img/code.jpg";

const ContentLeft = styled.div`
  transform: translateX(-100%);
  background: rgba(#000, 0.2);
  width: 100%;
  transition: transform 0.3s ease-in;
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
  transition: transform 0.3s ease-in, opacity 0.3s ease-in;
`;

const StyledSection = styled.section`
  display: flex;
  max-width: 800px;
  min-height: 300px;
  width: 90%;
  margin: 40px auto 0 auto;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
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
  position: relative;
`;

const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  color: #000;
  text-transform: uppercase;
  word-wrap: break-word;
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
  position: absolute;
  bottom: 0;
  color: #7bd338;
  align-self: flex-end;
  justify-self: flex-end;
  text-decoration: underline;
  transition: transform 0.3s ease-in;
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
  constructor(props) {
    super(props)
  }
  render() {
    const {title, url, createDate, updateDate, description} = this.props;
    return (
      <StyledSection>
        <LeftSection>
          <Photo />
          <ContentLeft>
            <Created>Created 📅: {createDate}</Created>
            <Created>Updated 📅: {updateDate}</Created>
          </ContentLeft>
        </LeftSection>
        <RightSection>
          <Title>{title}</Title>
          <Description>
            {description ? description : "No desciption for this project"}
          </Description>
          <GithubLink><a href={url}>Read more</a></GithubLink>
        </RightSection>
      </StyledSection>
    );
  }
}

export default RepositoryBox;
