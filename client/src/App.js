import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
<<<<<<< HEAD
import Community from ".pages/Community";
=======
import Community from "./pages/Community";
>>>>>>> 7dda55e07a7b07ac48b8330d7f2291054d84eea9

class App extends Component {
  state = {
    hi: "hiloo"
  }

  render() {
    return (
      <Router>
        <Nav />
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/community" component={Community} />
      </Router>
    )
  }
}

export default App;