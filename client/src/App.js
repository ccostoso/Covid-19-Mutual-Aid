// import React, { Component, Fragment } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Nav } from "./components/UniversalComponents/Nav";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Home from "./pages/Home";
// import Community from "./pages/Community";
// import Settings from "./pages/Settings";

// /* switch lang code */
// // Translation Higher Order Component
// import {
//   setTranslations,
//   setDefaultLanguage,
//   setLanguageCookie,
//   setLanguage,
//   translate,
// } from 'react-switch-lang';
// import en from './en.json';
// import fr from './fr.json';




// class App extends Component {
//   state = {
//     language: "en",
//     notUsedLanguage: "fr",
//     fontSize: "medium",
//     brightness: "light"
//   }

//   componentDidMount() {
//     // Do this two lines only when setting up the application
//     setTranslations({ en, fr });
//     setDefaultLanguage('en');
//     /* switch lang code */
//   }

//   handleSetLanguage = event => {
//     console.log(event.target.value);

//     const oldNotUsedLanguage = this.state.notUsedLanguage;
//     const oldLanguage = this.state.language;

//     this.setState({
//       notUsedLanguage: oldLanguage,
//       language: oldNotUsedLanguage,
//     })
//   };

//   //1. write state for things you want to control in other components DONE!!!
//   //2. write functions to alter the state here and give settinsg access to those functions. DONE!!!
//   //3. Bind the functions to this component's this. Hint: research .bind() method. DONE!!!
//   //4. figured out where you want to put the props in the other components to alter their css. 
//   //5. figure out how the settings interface will interact with the functions you pass it to affec the state in this component and thereby change the other components css.
//   //6.  Have some coffee and PB & J on that fancy cheesecake factory bread.

//   render() {
//     const { t } = this.props;
//     console.log(t);
//     return (
//       <div>
//         This is the Hello World
//         {t('home.title')}
//         {t('home.title', null, 'th')}
//         {t('hello', { name: 'World' })}
//         {t('fallback')}

//         <button type="button" value={this.state.notUsedLanguage} onClick={this.handleSetLanguage}>
//           Switch language
//         </button>
//       </div>
//       <Router>
//         <Nav />
//         <Route exact path="/" component={Login} />
//         <Route exact path="/register" component={Register} />
//         <Route path="/home" component={Home} />
//         <Route path="/community/:id" component={Community} />
//         <Route path="/settings" component={Settings} />
//       </Router>
//     )
//   }
// }

// export default App;


import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Nav } from "./components/UniversalComponents/Nav";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Settings from "./pages/Settings";

import { I18nProvider, LOCALES } from './i18n';
import translate from './i18n/translate';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: LOCALES.FRENCH
    }
    this.handleSetLanguage=this.handleSetLanguage.bind(this)
  }
 // const [locale, setLocale] = useState(LOCALES.ENGLISH);


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
  
 

  render() {
    return (
      <I18nProvider locale={this.state.locale}>
        <Router>
          <Nav />
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/home" component={Home} />
          <Route path="/community/:id" component={Community} />
          <Route path="/settings" component={()=> <Settings setLanguage={this.handleSetLanguage} />}/>
        </Router>
      </I18nProvider>
    )
  }
}

export default App;