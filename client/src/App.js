import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import Login from "./pages/Login";

class App extends Component {
  state = {
    hi: "hiloo"
  }

  render() {
    return (
      <Router>
        <Nav />
        <Route exact path="/" component={Login}/>
      </Router>
    )
  }
}

export default App;