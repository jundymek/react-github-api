import React, { useState } from "react";
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

const images = [`${img}`, `${img1}`, `${img2}`, `${img3}`];

function RepositoryList(props) {
  const [data, setData] = useState(props.data);
  const technologies = props.technologiesToSort;

  const handleChangeSelectedValue = e => {
    console.log(e.target.value);
    setData(getStringifyFilteredData(e.target.value));
  };

  const getStringifyFilteredData = value => {
    if (value === "all") {
      return props.data;
    } else if (value === "Other") {
      return props.data.filter(item => {
        return item[0].language === null;
      });
    } else {
      return props.data.filter(item => {
        return item[0].language === value;
      });
    }
  };

  return (
    <StyledSection>
      <StyledH2>Repositories</StyledH2>
      <form>
        <select id="language" onChange={e => handleChangeSelectedValue(e)}>
          <option value="all">All</option>
          {technologies.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </form>
      {data.map((item, index) => {
        return index % 2 === 0 ? (
          <RepositoryBox
            key={item[0]["key"]}
            img={images[Math.floor(Math.random() * images.length)]}
            title={item[0]["title"]}
            url={item[0]["url"]}
            createDate={item[0]["cration_date"]}
            updateDate={item[0]["modification_date"]}
            description={item[0]["description"]}
            language={item[0]["language"]}
            github_io={item[0]["github_io"]}
          />
        ) : (
          <RepositoryBox
            key={item[0]["key"]}
            img={images[Math.floor(Math.random() * images.length)]}
            title={item[0]["title"]}
            url={item[0]["url"]}
            createDate={item[0]["cration_date"]}
            updateDate={item[0]["modification_date"]}
            description={item[0]["description"]}
            language={item[0]["language"]}
            github_io={item[0]["github_io"]}
            isMirrored
          />
        );
      })}
    </StyledSection>
  );
}

export default RepositoryList;
