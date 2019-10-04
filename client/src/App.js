import React from 'react';
import axios from 'axios';
import './App.css';

const serverData = "http://localhost:5000/api/players";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      user: {},
    };
  };

  componentDidMount() {
    //mounting the API output here
    axios.get(serverData)
    .then(res => {
      this.setState(
        {
          user: res.data,
        }
        )
    })
  }

  render() {
    const { user, followers } = this.state;
    return (
      <div className="App" >
        <img alt="photo_of_mogwai" src={user.avatar_url} className="Avatar"></img>
        <h1 key={user.id}>{user.login}'s Super-cool Github Clique!</h1>
        <div className="Card">
          <div className="Row">
        {followers.map(follower => (
          <>
          <img className="Image" key={follower.id} src={follower.avatar_url} alt={follower.id}></img>
          <h2>{follower.login}</h2>
          <p>My github clearance level is {follower.type}</p>
          </>
        ))}
      </div>
      </div>
      </div>
    );
  }
}
export default App;