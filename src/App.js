import React from "react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import RepositoryList from "./components/RepositoryList";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repositoryData: ""
    };
  }

  handleSearchBarDataChange = (value) => {
    this.setState({ repositoryData: value });
  };

  render() {
    return (
      <div className="App">
        <MainHeader handleSearchBarDataChange={this.handleSearchBarDataChange}/>
        <RepositoryList data={this.state.repositoryData} />
      </div>
    );
  }
}

export default App;
