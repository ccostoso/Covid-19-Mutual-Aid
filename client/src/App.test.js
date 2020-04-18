class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        locale: LOCALES.FRENCH,
        theme: { 
          mode: 'light',
          size: 'normal'
        }
      }
      this.handleSetLanguage=this.handleSetLanguage.bind(this)
      this.handleSetBrightness=this.handleSetBrightness.bind(this)
      this.handleSetFontSize=this.handleSetFontSize.bind(this)
    }
  
  
    //   componentDidMount() {
    //   // Do this two lines only when setting up the application
    // }
  
    handleSetLanguage = event => {
      event.preventDefault()
      console.log(event.target.value);
        
      this.setState({
        locale: event.target.value
      })
    };
  
    handleSetBrightness = event => {
    //   event.preventDefault()
      console.log(event.target);
      var newState = this.state.theme;
      newState.mode = event.target.value
      
      this.setState({
        theme: newState
      })
    };
  
    handleSetFontSize = event => {
    //   event.preventDefault()
      console.log(event.target);
      var newState = this.state.theme;
      newState.size = event.target.value
      this.setState({
        theme: newState
      })
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
                <Route path="/settings" component={() => <Settings setLanguage={this.handleSetLanguage} setBrightness={this.handleSetBrightness} setFontSize={this.handleSetFontSize} />} />
              </Router>
          </>
        </ThemeProvider>
        </I18nProvider>
      )
    }
  }