import React, { Component } from "react";
import { LoginComponent } from "../../components/UniversalComponents/LoginComponent";

class Login extends Component {
    state = {

    }

    componentDidMount() {

    }

    handleChange = e => {
        const { name, value } = e;

        this.setState({
            [name]: value
        })
    }

    handleClick = e => {
        e.preventDefault();
    }

    render() {
        return <LoginComponent 
            username={this.state.username}
            password={this.state.password}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
             />
    }
}

export default Login;