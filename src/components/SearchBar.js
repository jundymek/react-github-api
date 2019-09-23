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
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({inputValue: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSearchBarDataChange(this.state.inputValue)
    }

    render () {
        return (
            <StyledForm onSubmit={this.handleSubmit}>
                <StyledInput 
                    type="text" 
                    placeholder="Szukaj repo"
                    onChange={this.handleInputChange}
                />
                <StyledButton>Szukaj</StyledButton>
            </StyledForm>
        )
    }
}
export default SearchBar;
