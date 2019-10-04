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

const Arrow =  styled.a`
  display: ${props => props.isScrollArrowVisible ? 'block' : 'none'};
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
    content: '🔝'
  }
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repositoryData: null,
      scrollArrowShow: false
    };
  }
  
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleSearchBarDataChange = value => {
    this.setState({ repositoryData: value });
  };

  handleScroll = () => {
    if (window.scrollY > 0 && !this.state.scrollArrowShow) {
      this.setState({scrollArrowShow: true})
    }
    if (window.scrollY === 0) {
      this.setState({scrollArrowShow: false})
    }
  }

 

  render() {
    return (
      <MainWrapper>
        <MainHeader 
          isData={this.state.repositoryData ? true : null} 
          handleSearchBarDataChange={this.handleSearchBarDataChange} />
        <RepositoryList data={this.state.repositoryData} />
        <Arrow isScrollArrowVisible={this.state.scrollArrowShow} href="#"/>
      </MainWrapper>
    );
  }
}

export default App;
