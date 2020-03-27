import React, { Component } from "react";
<<<<<<< HEAD
import { Container, Row, Col } from "../../components/Grid";

class Community extends Component {
    state = {

=======
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
>>>>>>> 7dda55e07a7b07ac48b8330d7f2291054d84eea9
    }

    componentDidMount() {

    }

    render() {
        return (
<<<<<<< HEAD
            <div></div>
=======

                    <h1>HIIIII</h1>

>>>>>>> 7dda55e07a7b07ac48b8330d7f2291054d84eea9
        )
    }
}

export default Community;