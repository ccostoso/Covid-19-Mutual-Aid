import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { Link } from "react-router-dom";

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
        return (
            <Container fluid>
                <Row className="justify-content-center my-4">
                    <Col size="md-6" className="border rounded py-3">
                        <form>
                            <div className="text-center">
                                <strong>Login</strong>
                            </div>
                            <Input 
                                value={this.state.username}
                                onChange={this.handleChange}
                                name="username"
                                placeholder="required"
                                label={"Username"}
                            />
                            <Input 
                                value={this.state.username}
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
                                <small>New user? Create an account <Link to="/register">here</Link>.</small>
                            </p>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login;