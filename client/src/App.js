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

const FontSize = () => {
  const small = {
    fontSize: '',
    fontWeight: 200
  };
  const medium = {
    fontSize: '',
    fontWeight: 400
  };
  const large = {
    fontSize: '',
    fontWeight: 600
  };

  // return (
  //   <div style={FontSize}>
  //     <h1 style={{color: '#0d1a26', fontWeight: 400}}>Font Size</h1>
  //     <button style={button}>Click Me!</button>
  //   </div>

 };

 const Brightness = () => {
   const lightest = {

   }
 }
 
//  export default ExampleInline;