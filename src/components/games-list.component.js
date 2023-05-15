import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Game = props => (
  <tr>
    <td>{props.game.username}</td>
    <td>{props.game.description}</td>
    <td>{props.game.duration}</td>
    <td>{props.game.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.game._id}>Edit</Link> | <a href="#" onClick={() => { props.deleteGame(props.game._id) }}>Delete</a>
    </td>
  </tr>
)

export default class GamesList extends Component {
  constructor(props) {
    super(props);

    this.deleteGame = this.deleteGame.bind(this)

    this.state = {games: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/games/')
      .then(response => {
        this.setState({ games: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteGame(id) {
    axios.delete('http://localhost:5000/games/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      games: this.state.games.filter(el => el._id !== id)
    })
  }

  gameList() {
    return this.state.games.map(currentgame => {
      return <Game game={currentgame} deleteGame={this.deleteGame} key={currentgame._id}/>;
    })
  }

  render() {
    return (
      <div className="bg">
        <h3>Logged Games</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.gameList() }
          </tbody>
        </table>
      </div>
    )
  }
}