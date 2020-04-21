import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "../../components/UniversalComponents/Grid";
import { Input, FormBtn } from "../../components/UniversalComponents/Form";
import { Alert } from "../../components/UniversalComponents/Alert";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import translate from '../../i18n/translate';

class Register extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        jsonMessage: '',
        user: '',
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

        console.log(e);

        const newUser = {
            displayName: this.state.displayName,
            email: this.state.email,
            password: this.state.password,
        }

        const response = await API.signUp(newUser);
        console.log(response);

        response.status === 200 && this.setState({
            user: response.data._id,
        })
        console.log(this.state.user);
    }

    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center my-4">
                    <Col size="md-6" className="border rounded py-3">
                        <form>
                            <p className="text-center">
                                <strong>{translate("Register")}</strong>
                            </p>
                            <Input 
                                value={this.state.displayName}
                                onChange={this.handleChange}
                                name="displayName"
                                placeholder="required"
                                label={translate("Display Name")}
                            />
                            <Input 
                                value={this.state.age}
                                onChange={this.handleChange}
                                name="age"
                                placeholder="required"
                                type="number"
                                label={translate("Age")}
                            />
                            <Input 
                                value={this.state.email}
                                onChange={this.handleChange}
                                name="email"
                                placeholder="required"
                                type="email"
                                label={translate("Email")}
                            />
                            <Input 
                                value={this.state.password}
                                onChange={this.handleChange}
                                name="password"
                                placeholder="required"
                                type="password"
                                label={translate("Password")}
                            />
                            <FormBtn
                                btntype="outline-success"
                                btnsize="sm"
                                onClick={this.handleClick}
                            >
                                {translate("Register")}
                            </FormBtn>
                            <p className="my-1">
                                <small>{translate("We won't share your personal information with anyone.")}</small>
                            </p>
                        </form>
                        {this.state.jsonMessage && <Alert>
                            {this.state.jsonMessage}
                        </Alert>}
                        {this.state.user && <Redirect to={`/home/${this.state.user}`}/>}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Register;