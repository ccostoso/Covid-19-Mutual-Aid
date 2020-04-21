import React, { Component } from "react";
import { Container, Row, Col } from "../../UniversalComponents/Grid";
import { Alert } from "../../UniversalComponents/Alert";
import { CommunityAbout } from "../CommunityAbout";
import { CommunityNews } from "../CommunityNews";
import translate from '../../../i18n/translate';
import API from "../../../utils/API";

class NewsAndAlerts extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        
    }

    joinCommunityHandleClick = async e => {
        e.preventDefault();

        const data = {
            pendingUser: this.props.userId
        };
        console.log("!!!DATA!!!", data);

        const putResponse = await API.putNonUserToPendingCommunity(this.props.title, data);
        console.log(putResponse);

        putResponse.status === 200 && this.setState({
            userJoined: !this.state.userJoined,
        })
    }

    componentDidMount() {
        this.setState({
            userJoined: this.props.userJoined,
        })
    }

    render() {
        return (
            <Container fluid className="p-0">
                <CommunityAbout 
                    about={this.props.about} 
                    userJoined={this.props.userJoined}
                    joinCommunityHandleClick={this.joinCommunityHandleClick}
                />
                <Row>
                    <CommunityNews newsPosts={this.props.newsPosts} />
                    <Col size="md-6">
                        <h4>{translate("Alerts")}</h4>
                        {this.props.alerts && this.props.alerts.map(alert => <Alert>{this.props.alert}</Alert>)}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default NewsAndAlerts;