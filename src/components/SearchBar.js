import React from 'react';
import styled from 'styled-components';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }
    render () {
        return (
            <input 
                type="text" 
                placeholder="Szukaj repo"
            />
        )
    }
}
export default SearchBar;
