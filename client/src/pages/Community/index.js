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
            id: 1,
            headerImage: "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/cumulus-cloud.jpg/",
            alerts: ["a", 2],
            about: "This is our page for Middletown Mutual Aid! Love you xoxo"
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container>
                <Row className="my-4">
                    <UserSidebar user={this.state.user} />
                    <CommunityPanel 
                        headerImage={this.state.community.headerImage}
                        title={this.state.community.title}
                        alerts={this.state.community.alerts} 
                        about={this.state.community.about}
                    />
                </Row>
            </Container>
        )
    }
}

export default Community;