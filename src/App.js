import React, { Component } from 'react';

import CardList from './CardList/CardList';
import AddUserForm from './AddUserForm/AddUserForm';

const data = [
  {
  "login": "gaearon",
  "id": 810438,
  "node_id": "MDQ6VXNlcjgxMDQzOA==",
  "avatar_url": "https://avatars.githubusercontent.com/u/810438?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/gaearon",
  "html_url": "https://github.com/gaearon",
  "followers_url": "https://api.github.com/users/gaearon/followers",
  "following_url": "https://api.github.com/users/gaearon/following{/other_user}",
  "gists_url": "https://api.github.com/users/gaearon/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/gaearon/subscriptions",
  "organizations_url": "https://api.github.com/users/gaearon/orgs",
  "repos_url": "https://api.github.com/users/gaearon/repos",
  "events_url": "https://api.github.com/users/gaearon/events{/privacy}",
  "received_events_url": "https://api.github.com/users/gaearon/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Dan Abramov",
  "company": "@facebook ",
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": "dan_abramov",
  "public_repos": 255,
  "public_gists": 74,
  "followers": 71133,
  "following": 172,
  "created_at": "2011-05-25T18:18:31Z",
  "updated_at": "2021-12-28T04:10:38Z"
},
{
  "login": "reaf",
  "id": 16985537,
  "node_id": "MDQ6VXNlcjE2OTg1NTM3",
  "avatar_url": "https://avatars.githubusercontent.com/u/16985537?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/reaf",
  "html_url": "https://github.com/reaf",
  "followers_url": "https://api.github.com/users/reaf/followers",
  "following_url": "https://api.github.com/users/reaf/following{/other_user}",
  "gists_url": "https://api.github.com/users/reaf/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/reaf/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/reaf/subscriptions",
  "organizations_url": "https://api.github.com/users/reaf/orgs",
  "repos_url": "https://api.github.com/users/reaf/repos",
  "events_url": "https://api.github.com/users/reaf/events{/privacy}",
  "received_events_url": "https://api.github.com/users/reaf/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Anything",
  "company": "No Company",
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2016-01-31T11:58:41Z",
  "updated_at": "2018-06-11T13:08:00Z"
}
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: data,
    }
    this.addUserCallBack = this.addUserCallBack.bind(this)
  }

  addUserCallBack = (newUser) => {
    this.setState((prevState) => ({
      userData: [...prevState.userData, newUser]
    }))
  }

  render() {
    return (
      <React.Fragment>
        <h1 className='app-title'>{this.props.title}</h1>
        <AddUserForm addUserCallBack={this.addUserCallBack}/>
        <CardList userList={this.state.userData} />
      </React.Fragment>
    )
  }
}

export default App