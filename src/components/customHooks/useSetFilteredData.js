import { useState, useEffect } from "react";
import { getFilteredDataByTechnology } from "../helpers/getFilteredDataByTechnology";

export function useSetFilteredData(data, filter = "all") {
  const [filteredData, setFilteredData] = useState(data.repositories);
  useEffect(() => {
    setFilteredData(getFilteredDataByTechnology(filter, data.repositories));
  }, [data, filter]);
  return filteredData;
}
