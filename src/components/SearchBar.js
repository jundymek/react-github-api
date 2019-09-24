import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    height: 2.5rem;
    width: 20rem;
    padding: .5rem;
    border: none;
`
const StyledForm = styled.form`
    display: flex;
    flex-wrap: nowrap;
`

const StyledButton = styled.button`
    height: 2.5rem;
    padding: .5rem;
    border: none;
    background-color: gray;
    color: #fff;
    width: 5rem;
`
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleFetchData = (e, data) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${data}/repos?`)
      .then(resp => resp.json())
      .then(resp => {
        if (resp.message && resp.message.includes("Not Found")) {
            console.log(resp);
            
        } else {
          console.log(resp);
          const repos = resp.map(item => item.html_url)
          console.log(repos)
          this.getWantedData(e, resp)
        }
      })
      .catch(error => {
        console.log(error);
      });
    console.log(data);
  };

  getWantedData = (e, data) => {
    e.preventDefault();
    const dataObjects = data.map(item => 
        [{'url': item.html_url, 'title': item.name, 'cration_date': item.created_at, 'modification_date': item.updated_at, 'description': item.description}]
    )
    console.log(dataObjects)
    this.props.handleSearchBarDataChange(dataObjects)
  }

  handleSubmit = e => {
    this.props.handleSearchBarDataChange('')
    e.preventDefault();
    const data = this.state.inputValue;
    console.log(data);
    this.handleFetchData(e, data);
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledInput type="text" placeholder="Szukaj repo" onChange={this.handleInputChange} />
        <StyledButton>Szukaj</StyledButton>
      </StyledForm>
    );
  }
}
export default SearchBar;
