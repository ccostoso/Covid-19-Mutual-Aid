import React, { Component } from "react";
import { Container, Row } from "../../components/Grid";
import { UserPanel } from "../../components/UserPanel";
import { UserSidebar } from "../../components/UserSidebar";

class Home extends Component {
    state = {
        user: {
            displayName: "Dem O. User",
            username: "DemoUser"
        },
        communities: [
            {
                title: "Middletown Mutual Aid",
                memberCount: 45,
                position: "Administrator",
                id: 1
            },
            {
                title: "Middlesex County Mutual Aid",
                memberCount: 255,
                position: "Member",
                id: 2
            },
            {
                title: "123 Fake Street Apt #45 Mutual Aid",
                memberCount: 19,
                position: "Moderator",
                id: 3
            }
        ]
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container>
                <Row className="my-4">
                    <UserSidebar user={this.state.user} />
                    <UserPanel communities={this.state.communities} />
                    {/* <UserCommunities communities={this.state.communities} /> */}
                </Row>
            </Container>
        )
    }
}

export default Home;