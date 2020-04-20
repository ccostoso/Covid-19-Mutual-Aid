import React, { Component } from "react";
import { Container, Row, Col } from "../../UniversalComponents/Grid";
import { Input, FormBtn } from "../../UniversalComponents/Form"
import { Alert } from "../../UniversalComponents/Alert";
import { CommunityAbout } from "../CommunityAbout";
import { CommunityNews } from "../CommunityNews";
import translate from '../../../i18n/translate';
import API from "../../../utils/API";

class CommunitySettings extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        description: "",
        headerImage: "",
        newAdministrator: "",
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        });
    }

    handleClick = e => {
        e.preventDefault();

        const update = this.state;

        API.putCommunity(this.props.title, update);
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container fluid className="p-0">
                <Row fluid>
                    <Col className="p-4" style={{ width: "100%" }}>
                        <h4>Community Description</h4>
                        <p>Set a description for your community.</p>
                        <Input
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        >

                        </Input>
                    </Col>
                </Row>
                <hr />
                <Row fluid>
                    <Col size="xs-12" className="p-4">
                        <h4>Header Image</h4>
                        <p>Set a header image for your community.</p>
                        <Input
                            name="headerImage"
                            value={this.state.headerImage}
                            onChange={this.handleChange}
                        >

                        </Input>
                    </Col>
                </Row>
                <hr />
                <Row fluid>
                    <Col size="xs-12" className="p-4">
                        <h4>New Administrator</h4>
                        <p>Assign another user to be an administrator.</p>
                        <small>Enter their e-mail here:</small>
                        <Input
                            name="newAdministrator"
                            value={this.state.newAdministrator}
                            onChange={this.handleChange}
                        >

                        </Input>
                    </Col>
                </Row>
                <hr />
                <FormBtn
                    type="button"
                    className="btn btn-primary ml-4"
                    onClick={this.handleClick}
                >
                    Submit Changes
                </FormBtn>
            </Container>
        )
    }
}

export default CommunitySettings;