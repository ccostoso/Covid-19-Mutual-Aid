import React, { Component } from "react";
import { LoginComponent } from "../../components/UniversalComponents/LoginComponent";
import API from "../../utils/API";
import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <LoginComponent 
                    email={this.props.user.email}
                    password={this.props.user.password}
                    handleChange={this.props.handleChange}
                    handleClick={this.props.handleClick}
                />
                {this.props.user.userId && <Redirect to={`/home/${this.props.user.userId}`}/>}
            </div>
        )
    }
}

export default Login;