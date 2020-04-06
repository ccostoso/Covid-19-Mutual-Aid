import React, { Component } from "react";
import { Container, Row, Col } from "../../components/UniversalComponents/Grid";
import { Input, FormBtn } from "../../components/UniversalComponents/Form";
import API from "../../utils/API";
// import { Link } from "react-router-dom";

class Register extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
    }

    componentDidMount() {

    }

    createUser = user => {

    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    handleClick = e => {
        e.preventDefault();

        console.log(e);

        const newUser = {
            displayName: this.state.displayName,
            email: this.state.email,
            password: this.state.password,
        }

        API.postUser(newUser);
    }

    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center my-4">
                    <Col size="md-6" className="border rounded py-3">
                        <form>
                            <p className="text-center">
                                <strong>Register</strong>
                            </p>
                            <Input 
                                value={this.state.displayName}
                                onChange={this.handleChange}
                                name="displayName"
                                placeholder="required"
                                label={"Display Name"}
                            />
                            <Input 
                                value={this.state.email}
                                onChange={this.handleChange}
                                name="email"
                                placeholder="required"
                                type="email"
                                label="Email"
                            />
                            <Input 
                                value={this.state.password}
                                onChange={this.handleChange}
                                name="password"
                                placeholder="required"
                                type="password"
                                label="Password"
                            />
                            <FormBtn
                                btntype="outline-success"
                                btnsize="sm"
                                onClick={this.handleClick}
                            >
                                Register
                            </FormBtn>
                            <p className="my-1">
                                <small>We won't share your personal information with anyone.</small>
                            </p>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Register;