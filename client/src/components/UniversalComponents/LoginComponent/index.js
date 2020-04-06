import React from "react";
import { Container, Row, Col } from "../Grid";
import { Input, FormBtn } from "../Form";
import { Jumbotron } from "../Jumbotron";
import { Link } from "react-router-dom";

export const LoginComponent = props => {
    return (
        <Container fluid className="p-0">
            {/* <Jumbotron>
                <h1 className="display-4">hi</h1>
            </Jumbotron> */}
            <Row className="justify-content-center mx-0 my-4">
                <Col size="md-6" className="border rounded py-3">
                    <form>
                        <p className="my-1 text-center">
                            <strong>Login</strong>
                        </p>
                        <Input
                            value={props.username}
                            onChange={props.handleChange}
                            name="username"
                            placeholder="required"
                            label={"Username"}
                        />
                        <Input
                            value={props.password}
                            onChange={props.handleChange}
                            name="password"
                            placeholder="required"
                            type="password"
                            label="Password"
                        />
                        <FormBtn
                            btntype="outline-success"
                            btnsize="sm"
                            onClick={props.handleClick}
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