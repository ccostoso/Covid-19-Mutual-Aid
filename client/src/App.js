import React, { Component } from "react";
import { BrowserRouter as Router, Route, useParams, useRouteMatch } from "react-router-dom";
import { Nav } from "./components/UniversalComponents/Nav";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Settings from "./pages/Settings";
import { I18nProvider, LOCALES } from './i18n';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import './App.css';



// A helper function to generate a special StyledComponent that handles global styles.
// Returns a StyledComponent that does not accept children. 
// Place it at the top of your React tree and the global styles will be injected when the component is "rendered". 
const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => props.theme.mode === 'dark' ? '#191515' : '#EEE'};
  color: ${props => props.theme.mode === 'dark' ? '#EEE' : '#191515'};
  font-size: ${props => props.theme.size === 'normal' ? '1em' : '1.2em'};
}
nav {
  background-color: ${props => props.theme.mode === 'dark' ? '#730808' : '#e00a0a'};
}
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: LOCALES.ENGLISH,
      theme: {
        mode: 'light',
        size: 'normal'
      },
      user: {},
      isLoggedIn: false,
    }
    this.handleSetLanguage = this.handleSetLanguage.bind(this)
    this.handleSetBrightness = this.handleSetBrightness.bind(this)
    this.handleSetFontSize = this.handleSetFontSize.bind(this)
  }


  //   componentDidMount() {
  //   // Do this two lines only when setting up the application
  // }

  
  //triggers the selection of languages to be rendered throughout the app
  handleSetLanguage = event => {
    event.preventDefault()
    console.log(event.target.value);

    this.setState({
      locale: event.target.value
    })
  };
  //triggers the dark and light mode theme to the app
  handleSetBrightness = event => {
    event.preventDefault()
    console.log(event.target);
    const newMode = event.target.value
  
    this.setState({
      theme: {
        mode: newMode === "light" ? "light" : "dark"
      }
    })
  };
  
  //triggers whether the font throughout the app will be magnified or not
  handleSetFontSize = event => {
    event.preventDefault()
    console.log(event.target);
    const newSize = event.target.value
  
    this.setState({
      theme: {
        size: newSize === "normal" ? "normal" : "magnify"
      }
    })
  };
  //"ThemeProvider" A helper component for theming. Injects the theme into all styled components 
  // anywhere beneath it in the component tree, via the context API.
render() {
    return (
      <I18nProvider locale={this.state.locale}>
        <ThemeProvider theme={this.state.theme}>
          <>
            <GlobalStyle />
            <Router>
              <Nav />
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route path="/home/:id" component={Home} _id={this.state.hi} />
              <Route path="/community/:id" component={Community} />
              <Route path="/settings" component={() => <Settings setLanguage={this.handleSetLanguage} setBrightness={this.handleSetBrightness} setFontSize={this.handleSetFontSize} />} />
            </Router>
          </>
        </ThemeProvider>
      </I18nProvider>
    )
  }
}

export default App;

