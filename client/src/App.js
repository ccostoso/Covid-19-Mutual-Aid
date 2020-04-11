import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Nav } from "./components/UniversalComponents/Nav";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Settings from "./pages/Settings";

class App extends Component {
  state = {
    hi: "hiloo",
    fontSize: 30,
    
  }

  render() {
    return (
      <Router>
        <Nav />
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/community/:id" component={Community} />
        <Route path="/settings" component={Settings} />
      </Router>
    )
  }
}

export default App;