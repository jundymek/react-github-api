import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import RepositoryBox from "../../components/RepositoryBox";

describe("<RepositoryBox />", () => {
  const key = 1;
  const item = {
    url: "https://github.com/jundymek/wtf-api",
    img: "/static/media/code1.edcfbd19.jpg",
    title: "wtf-api",
    creation_date: "2019-07-23",
    modification_date: "2019-07-30",
    description: "Simple github api testing",
    language: "HTML",
    key: 198473250,
    github_io: "https://jundymek.github.io/wtf-api"
  };
  it("Renders RepositoryBox", () => {
    const box = shallow(<RepositoryBox key={key} item={item} isMirrored={false} />);
    expect(box.text()).toContain("Simple github api testing");
  });
});
