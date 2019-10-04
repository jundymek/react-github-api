import React from "react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import RepositoryList from "./components/RepositoryList";
import styled from "styled-components";

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1021px;
  width: 100%;
  min-height: 100vh;
  margin: 0% auto;
  background: #f2f2f2;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repositoryData: null
    };
  }

  handleSearchBarDataChange = value => {
    this.setState({ repositoryData: value });
  };

  render() {
    return (
      <MainWrapper>
        <MainHeader 
          isData={this.state.repositoryData ? true : null} 
          handleSearchBarDataChange={this.handleSearchBarDataChange} />
        <RepositoryList data={this.state.repositoryData} />
      </MainWrapper>
    );
  }
}

export default App;
