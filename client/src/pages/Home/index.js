import React, { Component } from "react";
import { Container, Row } from "../../components/UniversalComponents/Grid";
import { UserPanel } from "../../components/HomeComponents/UserPanel";
import { UserSidebar } from "../../components/UniversalComponents/UserSidebar";
import API from "../../utils/API";



class Home extends Component {
    state = {
        user: {
            displayName: "Dem O. User",
            email: "DemoUser"
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
        const { id } = this.props.match.params;
        console.log("id", id);
        console.log("props.match", this.props.match.params);
        
        API.getUser(id)
            .then(res => {
                console.log(res.data);
                this.setState({
                    user: res.data
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
                <Row className="my-4">
                    <UserSidebar user={this.state.user} />
                    <UserPanel communities={this.state.communities} />
                </Row>
            </Container>
        )
    }
}

export default Home;