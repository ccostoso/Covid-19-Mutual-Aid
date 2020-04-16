import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Nav } from "./components/UniversalComponents/Nav";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Settings from "./pages/Settings";
import { I18nProvider, LOCALES } from './i18n';
// import translate from './i18n/translate';
import storage from 'local-storage-fallback';
import useTheme from './i18n/themeFont/useTheme'
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import './App.css';
import style from 'styled-theming';



// const getBackground = style('mode', {
//   light: '#EEE',
//   dark: '#191515'
// })

// const getForeground = style('mode', {
//   light: '#111',
//   dark: '#EEE'
// })

const getFontSize = style('textZoom', {
  normal: '1em',
  magnify: '1.2em'
})

const GlobalStyle = createGlobalStyle `
body {
  background-color: ${props => props.theme.mode === 'dark' ? '#191515' : '#EEE'};
  color: ${props => props.theme.mode === 'dark' ? '#EEE' : '#111'};
  font-size: ${getFontSize}
}
nav {
  background-color: ${props => props.theme.mode === 'dark' ? '#730808' : '#e00a0a'};
}
`;



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: LOCALES.FRENCH,
      theme: { mode:'light' }
      textZoom : {'normal'}
    }
    this.handleSetLanguage=this.handleSetLanguage.bind(this)
    this.handleSetBrightness=this.handleSetBrightness.bind(this)
  }
 // const [locale, setLocale] = useState(LOCALES.ENGLISH);
//  const [theme, setTheme] = useState({ mode: 'dark' })



  //   componentDidMount() {
//     // Do this two lines only when setting up the application
//     setTranslations({ en, fr });
//     setDefaultLanguage('en');
//     /* switch lang code */
//   }

  handleSetLanguage = event => {
    event.preventDefault()
    console.log(event.target.value);

    this.setState({
      locale: event.target.value
    })
  };

  handleSetBrightness = event => {
    event.preventDefault()
    console.log(event.target.value);

    this.setState({
      theme: { mode: event.target.value }
    })
  };

  
  handleSetFontSize = event => {
    event.preventDefault(
      console.log(event.target.value);

      this.setState({
        textZoom: { 'normal' }
      })
    )
  };

  
 

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
              <Route path="/home" component={Home} />
              <Route path="/community/:id" component={Community} />
              <Route path="/settings" component={() => <Settings setLanguage={this.handleSetLanguage} setBrightness={this.handleSetBrightness} />} />
            </Router>
        </>
      </ThemeProvider>
      </I18nProvider>
    )
  }
}

export default App;



  //1. write state for things you want to control in other components DONE!!!
  //2. write functions to alter the state here and give settinsg access to those functions. DONE!!!
  //3. Bind the functions to this component's this. Hint: research .bind() method. DONE!!!
  //4. figured out where you want to put the props in the other components to alter their css. 
  //5. figure out how the settings interface will interact with the functions you pass it to affec the state in this component and thereby change the other components css.



