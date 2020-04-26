import React from "react";
import { Container, Row, Col } from "../Grid";
import { Input, FormBtn } from "../Form";
// import { Jumbotron } from "../Jumbotron";
import { Link } from "react-router-dom";
import translate from '../../../i18n/translate';
import "./style.css";

export const LoginComponent = props => {
    return (
        <Container fluid className="p-0">
            <div className="jumbotron">
                <Row className="mx-0 my-4">
                    <Col size="md-8">
                        <h1 class="display-4">Welcome to MutuAid</h1>
                        <p class="lead">Join a growing community of people helpding each other in this time of crisis.</p>
                    </Col>
                    <Col size="md-4" className="border rounded py-3">
                        <form>
                            <p className="my-1 text-center">
                                <strong>{translate("Login")}</strong>
                            </p>
                            <Input
                                value={props.email}
                                onChange={props.handleChange}
                                name="email"
                                placeholder="required"
                                label={translate("Email")}
                            />
                            <Input
                                value={props.password}
                                onChange={props.handleChange}
                                name="password"
                                placeholder="required"
                                type="password"
                                label={translate("Password")}
                            />
                            <FormBtn
                                btntype="outline-success"
                                btnsize="sm"
                                onClick={props.handleClick}
                            >
                                {translate("Login")}
                            </FormBtn>
                            <p className="my-1">
                                <small>{translate("New user? Create an account")} <Link to="/register">here</Link>.</small>
                            </p>
                        </form>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}