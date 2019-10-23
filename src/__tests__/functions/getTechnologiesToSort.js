import { getTechnologiesToSort } from "../../components/helpers/getTechnologiesToSort";

const data = [
  {
    url: "https://github.com/jundymek/react-github-api",
    img: "/static/media/code.7ad2a7eb.jpg",
    title: "react-github-api",
    creation_date: "2019-10-03",
    modification_date: "2019-10-22",
    description:
      "Simple application built with React. It shows GitHub repositories of specified user. It also allows to filter repositories by technology used for theirs development.",
    language: "JavaScript",
    key: 212684914,
    github_io: "https://jundymek.github.io/react-github-api/",
    owner: {
      login: "jundymek",
      id: 24244872,
      node_id: "MDQ6VXNlcjI0MjQ0ODcy",
      avatar_url: "https://avatars1.githubusercontent.com/u/24244872?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/jundymek",
      html_url: "https://github.com/jundymek",
      followers_url: "https://api.github.com/users/jundymek/followers",
      following_url: "https://api.github.com/users/jundymek/following{/other_user}",
      gists_url: "https://api.github.com/users/jundymek/gists{/gist_id}",
      starred_url: "https://api.github.com/users/jundymek/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/jundymek/subscriptions",
      organizations_url: "https://api.github.com/users/jundymek/orgs",
      repos_url: "https://api.github.com/users/jundymek/repos",
      events_url: "https://api.github.com/users/jundymek/events{/privacy}",
      received_events_url: "https://api.github.com/users/jundymek/received_events",
      type: "User",
      site_admin: false
    }
  },
  {
    url: "https://github.com/jundymek/orlen-first-aid",
    img: "/static/media/code1.edcfbd19.jpg",
    title: "orlen-first-aid",
    creation_date: "2019-09-15",
    modification_date: "2019-09-15",
    description:
      "The project was inspired by one of the tasks for the Orlen company during the third edition of HackYeah. Simple application related to the topic of first aid in the event of road accidents. The application describes step by step actions that must be performed during an event.",
    language: null,
    key: 208632058,
    github_io: "http://jakub-matusiak.github.io/orlen-first-aid/",
    owner: {
      login: "jundymek",
      id: 24244872,
      node_id: "MDQ6VXNlcjI0MjQ0ODcy",
      avatar_url: "https://avatars1.githubusercontent.com/u/24244872?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/jundymek",
      html_url: "https://github.com/jundymek",
      followers_url: "https://api.github.com/users/jundymek/followers",
      following_url: "https://api.github.com/users/jundymek/following{/other_user}",
      gists_url: "https://api.github.com/users/jundymek/gists{/gist_id}",
      starred_url: "https://api.github.com/users/jundymek/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/jundymek/subscriptions",
      organizations_url: "https://api.github.com/users/jundymek/orgs",
      repos_url: "https://api.github.com/users/jundymek/repos",
      events_url: "https://api.github.com/users/jundymek/events{/privacy}",
      received_events_url: "https://api.github.com/users/jundymek/received_events",
      type: "User",
      site_admin: false
    }
  },
  {
    url: "https://github.com/jundymek/new-portfolio",
    img: "/static/media/computer.01477358.jpg",
    title: "new-portfolio",
    creation_date: "2019-08-21",
    modification_date: "2019-08-21",
    description: "Personal portfolio page",
    language: "CSS",
    key: 203672763,
    github_io: null,
    owner: {
      login: "jundymek",
      id: 24244872,
      node_id: "MDQ6VXNlcjI0MjQ0ODcy",
      avatar_url: "https://avatars1.githubusercontent.com/u/24244872?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/jundymek",
      html_url: "https://github.com/jundymek",
      followers_url: "https://api.github.com/users/jundymek/followers",
      following_url: "https://api.github.com/users/jundymek/following{/other_user}",
      gists_url: "https://api.github.com/users/jundymek/gists{/gist_id}",
      starred_url: "https://api.github.com/users/jundymek/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/jundymek/subscriptions",
      organizations_url: "https://api.github.com/users/jundymek/orgs",
      repos_url: "https://api.github.com/users/jundymek/repos",
      events_url: "https://api.github.com/users/jundymek/events{/privacy}",
      received_events_url: "https://api.github.com/users/jundymek/received_events",
      type: "User",
      site_admin: false
    }
  },
  {
    url: "https://github.com/jundymek/wtf-crew",
    img: "/static/media/code.7ad2a7eb.jpg",
    title: "wtf-crew",
    creation_date: "2019-08-21",
    modification_date: "2019-08-21",
    description: "Załoga WTF biorąca udział w Hackathonie 2019 :)",
    language: "CSS",
    key: 203669085,
    github_io: "https://kasiaizak.github.io/wtf-crew/",
    owner: {
      login: "jundymek",
      id: 24244872,
      node_id: "MDQ6VXNlcjI0MjQ0ODcy",
      avatar_url: "https://avatars1.githubusercontent.com/u/24244872?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/jundymek",
      html_url: "https://github.com/jundymek",
      followers_url: "https://api.github.com/users/jundymek/followers",
      following_url: "https://api.github.com/users/jundymek/following{/other_user}",
      gists_url: "https://api.github.com/users/jundymek/gists{/gist_id}",
      starred_url: "https://api.github.com/users/jundymek/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/jundymek/subscriptions",
      organizations_url: "https://api.github.com/users/jundymek/orgs",
      repos_url: "https://api.github.com/users/jundymek/repos",
      events_url: "https://api.github.com/users/jundymek/events{/privacy}",
      received_events_url: "https://api.github.com/users/jundymek/received_events",
      type: "User",
      site_admin: false
    }
  },
  {
    url: "https://github.com/jundymek/wtf-api",
    img: "/static/media/code1.edcfbd19.jpg",
    title: "wtf-api",
    creation_date: "2019-07-23",
    modification_date: "2019-07-30",
    description: "Simple github api testing",
    language: "HTML",
    key: 198473250,
    github_io: "https://jundymek.github.io/wtf-api",
    owner: {
      login: "jundymek",
      id: 24244872,
      node_id: "MDQ6VXNlcjI0MjQ0ODcy",
      avatar_url: "https://avatars1.githubusercontent.com/u/24244872?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/jundymek",
      html_url: "https://github.com/jundymek",
      followers_url: "https://api.github.com/users/jundymek/followers",
      following_url: "https://api.github.com/users/jundymek/following{/other_user}",
      gists_url: "https://api.github.com/users/jundymek/gists{/gist_id}",
      starred_url: "https://api.github.com/users/jundymek/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/jundymek/subscriptions",
      organizations_url: "https://api.github.com/users/jundymek/orgs",
      repos_url: "https://api.github.com/users/jundymek/repos",
      events_url: "https://api.github.com/users/jundymek/events{/privacy}",
      received_events_url: "https://api.github.com/users/jundymek/received_events",
      type: "User",
      site_admin: false
    }
  }
];

const data1 = [
  {
    url: "https://github.com/jundymek/wtf-api",
    img: "/static/media/code1.edcfbd19.jpg",
    title: "wtf-api",
    creation_date: "2019-07-23",
    modification_date: "2019-07-30",
    description: "Simple github api testing",
    language: "HTML",
    key: 198473250,
    github_io: "https://jundymek.github.io/wtf-api",
    owner: {
      login: "jundymek",
      id: 24244872,
      node_id: "MDQ6VXNlcjI0MjQ0ODcy",
      avatar_url: "https://avatars1.githubusercontent.com/u/24244872?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/jundymek",
      html_url: "https://github.com/jundymek",
      followers_url: "https://api.github.com/users/jundymek/followers",
      following_url: "https://api.github.com/users/jundymek/following{/other_user}",
      gists_url: "https://api.github.com/users/jundymek/gists{/gist_id}",
      starred_url: "https://api.github.com/users/jundymek/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/jundymek/subscriptions",
      organizations_url: "https://api.github.com/users/jundymek/orgs",
      repos_url: "https://api.github.com/users/jundymek/repos",
      events_url: "https://api.github.com/users/jundymek/events{/privacy}",
      received_events_url: "https://api.github.com/users/jundymek/received_events",
      type: "User",
      site_admin: false
    }
  }
];

const data2 = [
  {
    url: "https://github.com/jundymek/wtf-crew",
    img: "/static/media/code.7ad2a7eb.jpg",
    title: "wtf-crew",
    creation_date: "2019-08-21",
    modification_date: "2019-08-21",
    description: "Załoga WTF biorąca udział w Hackathonie 2019 :)",
    language: "CSS",
    key: 203669085,
    github_io: "https://kasiaizak.github.io/wtf-crew/",
    owner: {
      login: "jundymek",
      id: 24244872,
      node_id: "MDQ6VXNlcjI0MjQ0ODcy",
      avatar_url: "https://avatars1.githubusercontent.com/u/24244872?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/jundymek",
      html_url: "https://github.com/jundymek",
      followers_url: "https://api.github.com/users/jundymek/followers",
      following_url: "https://api.github.com/users/jundymek/following{/other_user}",
      gists_url: "https://api.github.com/users/jundymek/gists{/gist_id}",
      starred_url: "https://api.github.com/users/jundymek/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/jundymek/subscriptions",
      organizations_url: "https://api.github.com/users/jundymek/orgs",
      repos_url: "https://api.github.com/users/jundymek/repos",
      events_url: "https://api.github.com/users/jundymek/events{/privacy}",
      received_events_url: "https://api.github.com/users/jundymek/received_events",
      type: "User",
      site_admin: false
    }
  },
  {
    url: "https://github.com/jundymek/wtf-api",
    img: "/static/media/code1.edcfbd19.jpg",
    title: "wtf-api",
    creation_date: "2019-07-23",
    modification_date: "2019-07-30",
    description: "Simple github api testing",
    language: "HTML",
    key: 198473250,
    github_io: "https://jundymek.github.io/wtf-api",
    owner: {
      login: "jundymek",
      id: 24244872,
      node_id: "MDQ6VXNlcjI0MjQ0ODcy",
      avatar_url: "https://avatars1.githubusercontent.com/u/24244872?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/jundymek",
      html_url: "https://github.com/jundymek",
      followers_url: "https://api.github.com/users/jundymek/followers",
      following_url: "https://api.github.com/users/jundymek/following{/other_user}",
      gists_url: "https://api.github.com/users/jundymek/gists{/gist_id}",
      starred_url: "https://api.github.com/users/jundymek/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/jundymek/subscriptions",
      organizations_url: "https://api.github.com/users/jundymek/orgs",
      repos_url: "https://api.github.com/users/jundymek/repos",
      events_url: "https://api.github.com/users/jundymek/events{/privacy}",
      received_events_url: "https://api.github.com/users/jundymek/received_events",
      type: "User",
      site_admin: false
    }
  }
];

const data3 = [
  {
    url: "https://github.com/jundymek/wtf-api",
    img: "/static/media/code1.edcfbd19.jpg",
    title: "wtf-api",
    creation_date: "2019-07-23",
    modification_date: "2019-07-30",
    description: "Simple github api testing",
    language: "HTML",
    key: 198473250,
    github_io: "https://jundymek.github.io/wtf-api",
    owner: {
      login: "jundymek",
      id: 24244872,
      node_id: "MDQ6VXNlcjI0MjQ0ODcy",
      avatar_url: "https://avatars1.githubusercontent.com/u/24244872?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/jundymek",
      html_url: "https://github.com/jundymek",
      followers_url: "https://api.github.com/users/jundymek/followers",
      following_url: "https://api.github.com/users/jundymek/following{/other_user}",
      gists_url: "https://api.github.com/users/jundymek/gists{/gist_id}",
      starred_url: "https://api.github.com/users/jundymek/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/jundymek/subscriptions",
      organizations_url: "https://api.github.com/users/jundymek/orgs",
      repos_url: "https://api.github.com/users/jundymek/repos",
      events_url: "https://api.github.com/users/jundymek/events{/privacy}",
      received_events_url: "https://api.github.com/users/jundymek/received_events",
      type: "User",
      site_admin: false
    }
  },
  {
    url: "https://github.com/jundymek/wtf-api",
    img: "/static/media/code1.edcfbd19.jpg",
    title: "wtf-api",
    creation_date: "2019-07-23",
    modification_date: "2019-07-30",
    description: "Simple github api testing",
    language: "HTML",
    key: 198473250,
    github_io: "https://jundymek.github.io/wtf-api",
    owner: {
      login: "jundymek",
      id: 24244872,
      node_id: "MDQ6VXNlcjI0MjQ0ODcy",
      avatar_url: "https://avatars1.githubusercontent.com/u/24244872?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/jundymek",
      html_url: "https://github.com/jundymek",
      followers_url: "https://api.github.com/users/jundymek/followers",
      following_url: "https://api.github.com/users/jundymek/following{/other_user}",
      gists_url: "https://api.github.com/users/jundymek/gists{/gist_id}",
      starred_url: "https://api.github.com/users/jundymek/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/jundymek/subscriptions",
      organizations_url: "https://api.github.com/users/jundymek/orgs",
      repos_url: "https://api.github.com/users/jundymek/repos",
      events_url: "https://api.github.com/users/jundymek/events{/privacy}",
      received_events_url: "https://api.github.com/users/jundymek/received_events",
      type: "User",
      site_admin: false
    }
  }
];

const data4 = [
  {
    url: "https://github.com/jundymek/orlen-first-aid",
    img: "/static/media/code1.edcfbd19.jpg",
    title: "orlen-first-aid",
    creation_date: "2019-09-15",
    modification_date: "2019-09-15",
    description:
      "The project was inspired by one of the tasks for the Orlen company during the third edition of HackYeah. Simple application related to the topic of first aid in the event of road accidents. The application describes step by step actions that must be performed during an event.",
    language: null,
    key: 208632058,
    github_io: "http://jakub-matusiak.github.io/orlen-first-aid/",
    owner: {
      login: "jundymek",
      id: 24244872,
      node_id: "MDQ6VXNlcjI0MjQ0ODcy",
      avatar_url: "https://avatars1.githubusercontent.com/u/24244872?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/jundymek",
      html_url: "https://github.com/jundymek",
      followers_url: "https://api.github.com/users/jundymek/followers",
      following_url: "https://api.github.com/users/jundymek/following{/other_user}",
      gists_url: "https://api.github.com/users/jundymek/gists{/gist_id}",
      starred_url: "https://api.github.com/users/jundymek/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/jundymek/subscriptions",
      organizations_url: "https://api.github.com/users/jundymek/orgs",
      repos_url: "https://api.github.com/users/jundymek/repos",
      events_url: "https://api.github.com/users/jundymek/events{/privacy}",
      received_events_url: "https://api.github.com/users/jundymek/received_events",
      type: "User",
      site_admin: false
    }
  }
];

const data5 = [];

describe("getTechnologiesToSort", () => {
  describe("for proper data ", () => {
    it("for 1 element ", () => {
      expect(getTechnologiesToSort(data1)).toEqual(["HTML"]);
    });
    it("for 2 different elements", () => {
      expect(getTechnologiesToSort(data2).sort()).toEqual(["HTML", "CSS"].sort());
    });
    it("for 2 same elements", () => {
      expect(getTechnologiesToSort(data3).sort()).toEqual(["HTML"].sort());
    });
    it("for 9 mixed elements", () => {
      expect(getTechnologiesToSort(data).sort()).toEqual(["JavaScript", "HTML", "CSS", "Other"].sort());
    });
    it("for 1 null element", () => {
      expect(getTechnologiesToSort(data4).sort()).toEqual(["Other"].sort());
    });
    it("empty array", () => {
      expect(getTechnologiesToSort(data5).sort()).toEqual([].sort());
    });
  });
});
