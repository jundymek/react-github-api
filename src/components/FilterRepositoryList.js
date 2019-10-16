import React from "react";

function FilterRepositoryList({ data, options, handleFilterRepositoriesToShow }) {
  const handleChangeSelectedValue = e => {
    getStringifyFilteredData(e.target.value);
  };

  const getStringifyFilteredData = value => {
    console.log("PROPS data ", data);
    return value !== "All"
      ? handleFilterRepositoriesToShow(
          data.filter(item => {
            return item[0].language === value;
          })
        )
      : handleFilterRepositoriesToShow(data);
  };

  return (
    <form action="#">
      <select class="select" id="language" onClick={handleChangeSelectedValue}>
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

export default FilterRepositoryList;
