import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {}

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Login}/>
      </BrowserRouter>
    )
  }
}

export default App;