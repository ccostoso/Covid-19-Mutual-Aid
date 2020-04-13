import React, { Component } from "react";
import { BrowserRouter as Router, Route, useParams, useRouteMatch } from "react-router-dom";
import { Nav } from "./components/UniversalComponents/Nav";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Community from "./pages/Community";

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
        <Route path="/home/:id" component={Home} _id={this.state.hi} />
        <Route path="/community/:id" component={Community} />
      </Router>
    )
  }
}

export default App;