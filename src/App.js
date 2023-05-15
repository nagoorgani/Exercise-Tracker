import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import GamesList from "./components/games-list.component";
import EditGame from "./components/edit-game.component";
import CreateGame from "./components/create-game.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router className="bg">
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact  component={GamesList} />
      <Route path="/edit/:id" component={EditGame} />
      <Route path="/create" component={CreateGame} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
