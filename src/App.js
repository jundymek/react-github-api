import React, { useState, useEffect, useCallback } from "react";
import MainHeader from "./components/MainHeader";
import RepositoryList from "./components/RepositoryList";
import Footer from "./components/Footer";
import styled from "styled-components";

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1021px;
  width: 100%;
  min-height: 90vh;
  margin: 0% auto;
  background: #f2f2f2;
  z-index: -1;
`;

const Arrow = styled.a`
  display: ${props => (props.isScrollArrowVisible ? "block" : "none")};
  position: fixed;
  bottom: 30px;
  right: 20px;
  width: 20px;
  height: 20px;
  position: fixed;
  &::after {
    color: transparent;
    text-shadow: 0 0 0 #000;
    position: absolute;
    font-size: 40px;
    content: "🔝";
  }
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

function App() {
  const [repositoryData, setRepositoryData] = useState(null);
  const [technologiesToSort, setTechnologiesToSort] = useState(null);
  const [scrollArrowShow, setScrollArrowShow] = useState(false);

  const handleScroll = useCallback(
    () => {
      if (window.scrollY > 0 && !scrollArrowShow && repositoryData) {
        setScrollArrowShow(true);
      }
      if (window.scrollY <= 0) {
        setScrollArrowShow(false);
      }
    },
    [repositoryData, scrollArrowShow],
  )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  

  return (
    <MainWrapper>
      <MainHeader
        isData={repositoryData ? true : null}
        handleTechnologiesToSortChange={value => setTechnologiesToSort(value)}
        handleSearchBarDataChange={value => setRepositoryData(value)}
      />
      {repositoryData ? (
        <RepositoryList data={repositoryData} technologiesToSort={technologiesToSort} />
      ) : (
        <Paragraph>
          Please fill above form to get data from GitHub API. List all repositories of specified user.
        </Paragraph>
      )}
      <Arrow isScrollArrowVisible={scrollArrowShow} href="#" />
      <Footer />
    </MainWrapper>
  );
}

export default App;
