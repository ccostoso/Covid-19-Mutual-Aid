import React, { Component } from "react";
import { Container, Row } from "../../components/Grid";
import { UserSidebar } from "../../components/UserSidebar";

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

                    <h1>HIIIII</h1>

        )
    }
}

export default Community;