import React, { Component } from "react";
import { LoginComponent } from "../../components/UniversalComponents/LoginComponent";
import API from "../../utils/API";

class Login extends Component {
    state = {
        email: '',
        password: '',
        jsonMessage: '',
    }

    componentDidMount() {

    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    handleClick = e => {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        };

        API.signIn(user)
            .then(res => {
                console.log(res);
                return 
            })
            .then()
    }

    render() {
        return <LoginComponent 
            email={this.state.email}
            password={this.state.password}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
             />
    }
}

export default Login;