import React from "react";
import styled from "styled-components";
import RepositoryBox from "./RepositoryBox";
import FilterRepositoryList from "./FilterRepositoryList";
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

const images = [`${img}`, `${img1}`, `${img2}`, `${img3}`];

class RepositoryList extends React.PureComponent {
  state = {
    data: this.props.data,
    technologies: this.props.technologiesToSort
  };

  handleChangeSelectedValue = e => {
    console.log(e.target.value);
    this.setState({
      data: this.getStringifyFilteredData(e.target.value)
    });
  };

  getStringifyFilteredData = value => {
    if (value === "all") {
      return this.props.data;
    } else if (value === "Other") {
      return this.props.data.filter(item => {
        return item[0].language === null;
      });
    } else {
      return this.props.data.filter(item => {
        return item[0].language === value;
      });
    }
  };

  render() {
    return (
      <StyledSection>
        <StyledH2>Repositories</StyledH2>
        <form>
          <select class="select" id="language" onChange={e => this.handleChangeSelectedValue(e)}>
            <option class="option" value="all">
              All
            </option>
            {this.state.technologies.map(item => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </form>
        {this.state.data.map((item, index) => {
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
        })}
      </StyledSection>
    );
  }
}

export default RepositoryList;
