import React from "react";
import styled from "styled-components";

class FilterRepositoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "All",
            inputSearch: ""
        };
      }

  handleChangeSelectedValue = (e) => {
    //   e.preventDefault()
    //   this.setState({
    //       selected: e.target.value
    //   })
    //   console.log(e.target.value)
      this.getStringifyFilteredData(e.target.value)
  }

  getStringifyFilteredData = value => {
    console.log("PROPS data ", this.props.data)
    return value !== "All"
      ? this.props.handleFilterRepositoriesToShow(
          this.props.data.filter(item => {
            return item[0].language === value;
          })
        )
      : this.props.handleFilterRepositoriesToShow(this.props.data);
  };

  render() {
    const { options, data } = this.props;
    return (
      <form action="#">
        <select class="select" id="language" onClick={this.handleChangeSelectedValue}>
          <option class="option" value="all">
            All
          </option>
          {options.map(item => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </form>
    );
  }
}

export default FilterRepositoryList;
