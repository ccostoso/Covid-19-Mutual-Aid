// import intl from 'react-intl-universal';
// import _ from "lodash";
// import http from "axios";
// import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Nav } from "./components/UniversalComponents/Nav";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Home from "./pages/Home";
// import Community from "./pages/Community";
// import Settings from "./pages/Settings";
// import IntlPolyfill from "intl";

// require('./en.json');
// require('./fr.json');

// const SUPPOER_LOCALES = [
//   {
//     name: "English",
//     value: "en-US"
//   },
//   {
//     name: "français",
//     value: "fr-FR"
//   }
// ];


// class App extends Component {
//     state = { initDone: false };

//   constructor(props) {
//     super(props);
//     this.onSelectLocale = this.onSelectLocale.bind(this);
//   }

//   componentDidMount() {
//     this.loadLocales();
//   }

//   render() {
//     return (
//       this.state.initDone &&
//       <div>
//         {this.renderLocaleSelector()}
//      <Router>
//         <Nav />
//         <Route exact path="/" render={Login} />
//         <Route exact path="/register" render={Register} />
//         <Route path="/home" render={Home} />
//         <Route path="/community/:id" render={Community} />
//         <Route path="/settings" render={Settings} />
//       </Router>
//       </div>
//     );
//   }
// }

// loadLocales() {
//     let currentLocale = intl.determineLocale({
//       urlLocaleKey: "lang",
//       cookieLocaleKey: "lang"
//     });
//     if (!_.find(SUPPOER_LOCALES, { value: currentLocale })) {
//       currentLocale = "en-US";
//     }

//     http
//       .get(`locales/${currentLocale}.json`)
//       .then(res => {
//         console.log("App locale data", res.data);
//         // init method will load CLDR locale data according to currentLocale
//         return intl.init({
//           currentLocale,
//           locales: {
//             [currentLocale]: res.data
//           }
//         });
//       })
//       .then(() => {
//         // After loading CLDR locale data, start to render
//         this.setState({ initDone: true });
//       });
//   }

//   renderLocaleSelector() {
//     return (
//       <select onChange={this.onSelectLocale} defaultValue="">
//         <option value="" disabled>Change Language</option>
//         {SUPPOER_LOCALES.map(locale => (
//           <option key={locale.value} value={locale.value}>{locale.name}</option>
//         ))}
//       </select>
//     );
//   }

//   onSelectLocale(e) {
//     let lang = e.target.value;
//     location.search = `?lang=${lang}`;
//   }

// export default App;