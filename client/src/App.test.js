// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


import { ThemeProvider, createGlobalStyle } from 'styled-components';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: LOCALES.FRENCH
      theme: { mode:'light' }
    }
    this.handleSetLanguage=this.handleSetLanguage.bind(this)
  }
 // const [locale, setLocale] = useState(LOCALES.ENGLISH);

 const GlobalStyle = createGlobalStyle `
 body {
   background-color: ${props => props.theme.mode === 'dark' ? '#111' : '#EEE'};
   color: ${props => props.theme.mode === 'dark' ? '#EEE' : '#111'};
 }
 `

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
      <ThemeProvider theme={{ mode: 'dark' }}>
        <>
          <GlobalStyle />
          <I18nProvider locale={this.state.locale}>
            <Router>
              <Nav />
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route path="/home" component={Home} />
              <Route path="/community/:id" component={Community} />
              <Route path="/settings" component={() => <Settings setLanguage={this.handleSetLanguage} />} />
            </Router>
          </I18nProvider>
        </>
      </ThemeProvider>
    )
  }
}

export default App;
