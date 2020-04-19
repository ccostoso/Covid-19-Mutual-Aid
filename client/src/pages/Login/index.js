import React, { Component } from "react";
import { LoginComponent } from "../../components/UniversalComponents/LoginComponent";
import API from "../../utils/API";
import { Redirect } from "react-router-dom";

class Login extends Component {
    state = {
        email: '',
        password: '',
        jsonMessage: '',
        user: "",
        // loggedIn: false,
    }

    componentDidMount() {

    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    handleClick = async e => {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        };

        const response = await API.signIn(user)
        console.log("LOGIN RESPONSE", response);

        response.status === 200 && this.setState({
            user: response.data._id,
            loggedIn: true,
        })
    }

    render() {
        return (
            <div>
                <LoginComponent 
                email={this.state.email}
                password={this.state.password}
                handleChange={this.handleChange}
                handleClick={this.handleClick}
                />
                {this.state.user && <Redirect to={`/home/${this.state.user}`}/>}
            </div>
        )
    }
}

export default Login;