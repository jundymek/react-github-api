import React from "react";
import styled from "styled-components";
import RepositoryBox from "./RepositoryBox";
import img from "../img/code.jpg";
import img1 from "../img/code1.jpg";
import img2 from "../img/code2.jpg";
import img3 from "../img/computer.jpg";

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

const StyledH2 = styled.h2`
  font-weight: 700;
  text-align: center;
`;

const Paragraph = styled.p`
  width: 35%;
  align-self: flex-end;
  text-align: justify;
  padding-right: 30px;
  margin-top: -100px;
  @media (max-width: 400px) {
    font-size: 14px;
    margin-top: -80px;
  }
`;

const images = [`${img}`, `${img1}`, `${img2}`, `${img3}`];

class RepositoryList extends React.PureComponent {
  render() {
    const { data } = this.props;
    return (
      <StyledSection>
        {data ? (
          <StyledH2>Repositories</StyledH2>
        ) : (
          <Paragraph>
            Please fill above form to get data from GitHub API. List all repositories of specified user.
          </Paragraph>
        )}
        {data
          ? data.map((item, index) => {
              return index % 2 === 0 ? (
                <RepositoryBox
                  key={item[0]["id"]}
                  img={images[Math.floor(Math.random() * images.length)]}
                  title={item[0]["title"]}
                  url={item[0]["url"]}
                  createDate={item[0]["cration_date"]}
                  updateDate={item[0]["modification_date"]}
                  description={item[0]["description"]}
                  language={item[0]["language"]}
                />
              ) : (
                <RepositoryBox
                  key={item[0]["id"]}
                  img={images[Math.floor(Math.random() * images.length)]}
                  title={item[0]["title"]}
                  url={item[0]["url"]}
                  createDate={item[0]["cration_date"]}
                  updateDate={item[0]["modification_date"]}
                  description={item[0]["description"]}
                  language={item[0]["language"]}
                  isMirrored
                />
              );
            })
          : ""}
      </StyledSection>
    );
  }
}

export default RepositoryList;
