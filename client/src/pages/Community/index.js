import React, { Component } from "react";
import { Container, Row } from "../../components/UniversalComponents/Grid";
import { UserSidebar } from "../../components/UniversalComponents/UserSidebar";
import { CommunityPanel } from "../../components/CommunityComponents/CommunityPanel";

class Community extends Component {
    state = {
        user: {
            displayName: "Dem O. User",
            username: "DemoUser"
        },
        community: {
            title: "Middletown Mutual Aid",
            memberCount: 45,
            position: "Administrator",
            id: 1
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container>
                <Row className="my-4">
                    <UserSidebar user={this.state.user} />
                    <CommunityPanel />
                </Row>
            </Container>
        )
    }
}

export default Community;