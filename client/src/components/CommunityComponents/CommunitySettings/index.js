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
        communityName: this.props.title,
        community: {},
        description: "",
        headerImage: "",
        newAdministrator: "",
        pendingUsers: [],
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

    async componentDidMount() {
        const getCommunityResponse = await API.getCommunity(this.props.title);
        console.log("getCommunityResponse", getCommunityResponse);

        this.setState({
            community: getCommunityResponse.data,
        })
    }

    render() {
        return (
            <Container fluid className="p-0">
                <Row>
                    <Col size="md-6" className="px-4">
                        <h4>Community Description</h4>
                        <p>Set a description for your community.</p>
                        <Input
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        >

                        </Input>

                    </Col>
                    <Col size="md-6" className="px-4">
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
                    <Col className="px-2">
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
                <hr />
                <Row fluid>
                    <Col className="px-4">
                        <h4>Pending Users:</h4>
                        Allow these users to enter?
                        <ul>
                            {this.state.pendingUsers.map(pendingUser => {
                                return (<li>
                                    <div>
                                        {pendingUser.displayName}
                                    </div>
                                </li>)
                            })}
                            
                        </ul>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CommunitySettings;