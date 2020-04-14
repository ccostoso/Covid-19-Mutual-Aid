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
    languages: ["English", "Spanish", "French"],
    fontSize: 50,
    brightness: 50,
    active: true,
    themes: []
  }

//1. write state for things you want to control in other components
//2. write functions to alter the state here and give settinsg access to those functions.
//3. Bind the functions to this component's this. Hint: research .bind() method.
//4. figured out where you want to put the props in the other components to alter their css.
//5. figure out how the settings interface will interact with the functions you pass it to affec the state in this component and thereby change the other components css.
//6.  Have some coffee and PB & J on that fancy cheesecake factory bread.


  render() {
    return (
      <Router>
        <Nav />
        <Route exact path="/" render={(props) => <Login {...props} languages={"English"} fontSize={this.state.fontSize} brightness={this.state.brightness} active={true} themes={''} />}/>
        <Route exact path="/register" render={(props) => <Register {...props} languages={"English"} fontSize={this.state.fontSize} brightness={this.state.brightness} active={true} themes={''} />} />
        <Route path="/home" render={(props) => <Home {...props} languages={"English"} fontSize={this.state.fontSize} brightness={this.state.brightness} active={true} themes={''} />} />
        <Route path="/community/:id" render={(props) => <Community {...props} languages={"English"} fontSize={this.state.fontSize} brightness={this.state.brightness} active={true} themes={''} />} />
        <Route path="/settings" render={(props) => <Settings {...props} languages={"English"} fontSize={this.state.fontSize} brightness={this.state.brightness} active={true} themes={''} />} />
      </Router>
    )
  }
}

export default App;



//in a componentDidMount fucntion that grabs user settings
// then pass those settings to the child components 

const fontSize = () => {
  const small = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '50px',
    color: '#444',
    border: '1px solid #1890ff',
  };
  const medium = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    background: '#1890ff',
    color: '#fff',
    fontSize: '14px',
    cursor: 'pointer',
    transition: '.3s background',
    '&:hover': {
      background: '#40a9ff'
    }
  };
  const large = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    background: '#1890ff',
    color: '#fff',
    fontSize: '14px',
    cursor: 'pointer',
    transition: '.3s background',
    '&:hover': {
      background: '#40a9ff'
    }
 
  return (
    <div style={wrapper}>
      <h1 style={{color: '#0d1a26', fontWeight: 400}}>Example Inline.</h1>
      <button style={button}>Button</button>
    </div>
  );
 };
 
 export default ExampleInline;