import React from "react";
import RepositoryBox from "./RepositoryBox";

export function RepositoryList({ data }) {
  return data.map((item, index) => {
    return index % 2 === 0 ? (
      <RepositoryBox
        key={item[0]["key"]}
        img={item[0]["img"]}
        title={item[0]["title"]}
        url={item[0]["url"]}
        createDate={item[0]["creation_date"]}
        updateDate={item[0]["modification_date"]}
        description={item[0]["description"]}
        language={item[0]["language"]}
        github_io={item[0]["github_io"]}
      />
    ) : (
      <RepositoryBox
        key={item[0]["key"]}
        img={item[0]["img"]}
        title={item[0]["title"]}
        url={item[0]["url"]}
        createDate={item[0]["creation_date"]}
        updateDate={item[0]["modification_date"]}
        description={item[0]["description"]}
        language={item[0]["language"]}
        github_io={item[0]["github_io"]}
        isMirrored
      />
    );
  });
}
