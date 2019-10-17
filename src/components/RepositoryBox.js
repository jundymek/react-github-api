import React from "react";
import styled, { css } from "styled-components";

const ContentLeft = styled.div`
  transform: translateX(-150%);
  background: rgba(#000, 0.2);
  width: 100%;
  transition: transform 0.3s ease-in;
  @media (max-width: 500px) {
    transform: translateX(0);
  }
`;

const Photo = styled.div`
  background-image: url(${props => props.img});
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
  max-width: 600px;
  min-height: 400px;
  width: 90%;
  margin: 40px 0 0 0;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
  @media (min-width: 500px) {
    &:hover ${ContentLeft} {
      transform: translateX(0);
    }
    &:hover ${Photo} {
      opacity: 0.9;
      transform: rotate(10deg) scale(1.3);
    }
  }
  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }

  ${props =>
    props.isMirrored &&
    css`
      flex-direction: row-reverse;
      &:hover ${ContentLeft} {
        transform: translateX(0px);
      }
    `}
`;

const LeftSection = styled.div`
  width: 40%;
  color: #fff;
  padding: 20px;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
  position: relative;
  ${props =>
    props.isMirrored &&
    css`
      clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
    `}
  @media (max-width: 500px) {
    width: 100%;
    clip-path: polygon(0 0, 100% 10%, 100% 90%, 0% 100%);
    margin-top: 50px;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 30px;
  position: relative;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  color: #000;
  text-transform: uppercase;
  word-wrap: break-word;
`;

const SubTitle = styled.h3`
  margin-top: 20px;
  padding: 0;
  font-size: 1rem;
  color: #a2a2a2;
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

const LinksWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: ${props => (props.github_io ? "space-between" : "flex-end")};
  bottom: 10px;
  width: 80%;
  @media (max-width: 500px) {
    bottom: -20px;
  }
`;

const GithubLink = styled.a`
  bottom: 20px;
  color: #7bd338;
  text-decoration: underline;
  transition: transform 0.3s ease-in;
  cursor: pointer;
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

function LinksInRepositoryBox({ url, github_io }) {
  return (
    <LinksWrapper github_io={github_io}>
      {github_io ? <GithubLink href={github_io}>Live preview></GithubLink> : null}
      <GithubLink href={url}>Github></GithubLink>
    </LinksWrapper>
  );
}

function RepositoryBox({ title, url, createDate, updateDate, description, language, isMirrored, img, github_io }) {
  return (
    <StyledSection isMirrored={isMirrored}>
      <LeftSection isMirrored={isMirrored}>
        <Photo img={img} />
        <ContentLeft>
          <Created>
            Created{" "}
            <span role="img" aria-label="calendar icon">
              📅
            </span>
            : {createDate}
          </Created>
          <Created>
            Updated{" "}
            <span role="img" aria-label="calendar icon">
              📅
            </span>
            : {updateDate}
          </Created>
        </ContentLeft>
      </LeftSection>
      <RightSection isMirrored={isMirrored}>
        <LinksInRepositoryBox url={url} github_io={github_io} />
        <Title>{title}</Title>
        <SubTitle>{language ? `Written mostly in: ${language}` : ""}</SubTitle>
        <Description>{description ? description : "No desciption for this project"}</Description>
      </RightSection>
    </StyledSection>
  );
}

export default RepositoryBox;
