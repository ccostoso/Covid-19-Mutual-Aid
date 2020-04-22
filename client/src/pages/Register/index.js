import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "../../components/UniversalComponents/Grid";
import { Input, FormBtn } from "../../components/UniversalComponents/Form";
import { Alert } from "../../components/UniversalComponents/Alert";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import translate from '../../i18n/translate';

class Register extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("REGISTER PROPS", this.props);
        return (
            <Container fluid>
                <Row className="justify-content-center my-4">
                    <Col size="md-6" className="border rounded py-3">
                        <form>
                            <p className="text-center">
                                <strong>{translate("Register")}</strong>
                            </p>
                            <Input 
                                // value={this.props.registerUser.displayName}
                                onChange={this.props.handleRegisterChange}
                                name="displayName"
                                placeholder="required"
                                label={translate("Display Name")}
                            />
                            <Input 
                                // value={this.props.registerUser.email}
                                onChange={this.props.handleRegisterChange}
                                name="email"
                                placeholder="required"
                                type="email"
                                label={translate("Email")}
                            />
                            <Input 
                                // value={this.props.registerUser.password}
                                onChange={this.props.handleRegisterChange}
                                name="password"
                                placeholder="required"
                                type="password"
                                label={translate("Password")}
                            />
                            <FormBtn
                                btntype="outline-success"
                                btnsize="sm"
                                onClick={this.props.handleRegisterClick}
                            >
                                {translate("Register")}
                            </FormBtn>
                            <p className="my-1">
                                <small>{translate("We won't share your personal information with anyone.")}</small>
                            </p>
                        </form>
                        {/* {this.props.registerUser.jsonMessage && <Alert>
                            {this.props.registerUser.jsonMessage}
                        </Alert>} */}
                        {this.props.user.registered && <Redirect to={`/home/${this.props.user.userId}`}/>}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Register;