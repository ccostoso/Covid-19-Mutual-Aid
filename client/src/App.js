import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Nav } from "./components/UniversalComponents/Nav";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import { I18nProvider, LOCALES } from './i18n';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import './App.css';
import API from "./utils/API";
import Cookies from "universal-cookie";


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
  }

  state = {
    locale: LOCALES.ENGLISH,
    theme: {
      mode: 'light',
      size: 'normal'
    },
    user: {
      displayName: '',
      email: '',
      password: '',
      jsonMessage: '',
      userId: "",
    },
    // registerUser: {
    //   displayName: '',
    //   email: '',
    //   password: '',
    //   jsonMessage: '',
    //   userId: '',
    // },
    isLoggedIn: false,
  }


  //triggers the selection of languages to be rendered throughout the app
  handleSetLanguage = event => {
    event.preventDefault()

    this.setState({
      locale: event.target.value
    })
  };
  //triggers the dark and light mode theme to the app
  handleSetBrightness = event => {
    event.preventDefault()
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
    const newSize = event.target.value

    this.setState({
      theme: {
        size: newSize === "normal" ? "normal" : "magnify"
      }
    })
  };


  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    })
  }

  handleClick = async e => {
    e.preventDefault();

    const user = {
      email: this.state.user.email,
      password: this.state.user.password
    };

    const response = await API.signIn(user)

    // response.status === 200 && 

    if (response.status === 200) {
      const cookies = new Cookies();
      cookies.set("userId", response.data._id)

      this.setState({
        user: {
          ...this.state.user,
          userId: cookies.get("userId"),
        },
      })
    }
  }

  handleRegisterChange = e => {
    const { name, value } = e.target;
    console.log(name)
    console.log(value)

    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    })
    console.log("LOOOOOOOOOOOOOOOOOK HERE")
    console.log(this.state.user);
  }

  handleRegisterClick = async e => {
    e.preventDefault();

    console.log(e);

    const newUser = {
      displayName: this.state.user.displayName,
      email: this.state.user.email,
      password: this.state.user.password,
    }

    const response = await API.signUp(newUser);
    console.log(response);

    response.status === 200 && this.setState({
      user: {
        ...this.state.user,
        userId: response.data._id,
        registered: true,
      },
    })
    console.log(this.state.user);
  }

  //"ThemeProvider" A helper component for theming. Injects the theme into all styled components 
  // anywhere beneath it in the component tree, via the context API.
  render() {
    // console.log("~~~!!!!!!!!!!!!!!!!~~~")
    // console.log(this.state.userId);
    return (
      <I18nProvider locale={this.state.locale}>
        <ThemeProvider theme={this.state.theme}>
          <>
            <GlobalStyle />
            <Router>
              <Nav />
              
              <Route exact path="/" render={() => {
                return <Login
                  user={this.state.user}
                  handleChange={this.handleChange}
                  handleClick={this.handleClick}
                />
              }
              } />
              <Route exact path="/register" render={() => {
                return <Register
                  user={this.state.user}
                  handleRegisterChange={this.handleRegisterChange}
                  handleRegisterClick={this.handleRegisterClick}
                />
              }} />
              <Route path="/home/:id" render={() => {
                return <Home
                  user={this.state.user}
                />
              }}
              />
              <Route path="/community/:id" component={Community} />
              <Route path="/settings/" render={() => <Settings setLanguage={this.handleSetLanguage} setBrightness={this.handleSetBrightness} setFontSize={this.handleSetFontSize} />} />
              <Route path="/profile/:id" render={() => {
                return (
                  <Profile
                    profileUser={this.state.user}
                  />
                )
              }} />
            </Router>
          </>
        </ThemeProvider>
      </I18nProvider>
    )
  }
}

export default App;

