import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
// import { Link } from "react-router-dom";

class Register extends Component {
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
        return (
            <Container fluid>
                <Row className="justify-content-center my-4">
                    <Col size="md-6" className="border rounded py-3">
                        <form>
                            <p className="text-center">
                                <strong>Register</strong>
                            </p>
                            <Input 
                                value={this.state.username}
                                onChange={this.handleChange}
                                name="username"
                                placeholder="required"
                                label={"Username"}
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
                                Login
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