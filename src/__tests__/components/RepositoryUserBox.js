import React from "react";
import { render } from "@testing-library/react";
import RepositoryUserBox from "../../components/RepositoryUserBox"


const testUser = {
    "login": "jundymek",
    "id": 24244872,
    "node_id": "MDQ6VXNlcjI0MjQ0ODcy",
    "avatar_url": "https://avatars1.githubusercontent.com/u/24244872?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jundymek",
    "html_url": "https://github.com/jundymek",
    "followers_url": "https://api.github.com/users/jundymek/followers",
    "following_url": "https://api.github.com/users/jundymek/following{/other_user}",
    "gists_url": "https://api.github.com/users/jundymek/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jundymek/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jundymek/subscriptions",
    "organizations_url": "https://api.github.com/users/jundymek/orgs",
    "repos_url": "https://api.github.com/users/jundymek/repos",
    "events_url": "https://api.github.com/users/jundymek/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jundymek/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Łukasz Dymek",
    "company": null,
    "blog": "https://jundymek.github.io",
    "location": "Warsaw, Poland",
    "email": null,
    "hireable": true,
    "bio": null,
    "public_repos": 22,
    "public_gists": 0,
    "followers": 5,
    "following": 0,
    "created_at": "2016-11-29T09:18:33Z",
    "updated_at": "2019-10-25T21:18:54Z"
  }

xdescribe('<RepositoryUserBox test', () => {
    it('With proper user', () => {
        const component = render(<RepositoryUserBox owner={testUser} />)
        expect(component.getByText(/${jundymek}/)).toBeFalsy()
        // expect(component.textContent).toContain(testUser.login);
    });
});
