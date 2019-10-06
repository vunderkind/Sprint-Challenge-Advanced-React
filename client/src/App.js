import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerData from './components/PlayerData';
import NavBar from './components/NavBar';

const serverData = "http://localhost:5000/api/players";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  };

  componentDidMount() {
    //mounting the API output here
    axios.get(serverData)
    .then(res => {
      this.setState(
        {
          players: res.data,
        }
        )
    })
  }

  render() {
    const {players} = this.state;
    return (
      <div class="Wrapper">
        <NavBar />
      {players.map(player=>(
        <div className="PlayerCards">
        <PlayerData
        name={player.name}
        country={player.country}
        searches={player.searches}
        />
        </div>
      )
      )
      }
      </div>
      
    )
  }
}
export default App;