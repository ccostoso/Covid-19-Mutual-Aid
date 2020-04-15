import React from "react";
import { Container, Row, Col } from "../Grid";
import { Input, FormBtn } from "../Form";
// import { Jumbotron } from "../Jumbotron";
import { Link } from "react-router-dom";
import translate from '../../../i18n/translate';

export const LoginComponent = props => {
    return (
        <Container fluid className="p-0">
            <Row className="justify-content-center mx-0 my-4">
                <Col size="md-6" className="border rounded py-3">
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
        </Container>
    )
}