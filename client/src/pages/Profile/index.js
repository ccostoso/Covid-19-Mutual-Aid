import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "../../components/UniversalComponents/Grid";
import API from "../../utils/API";
import { Jumbotron } from "../../components/UniversalComponents/Jumbotron";

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        profileUser: {
            displayName: "Hi",
            skills: [],
            needs: [],
            communities: [1, 2, 3],
        }
        // profileUser: this.props.location.state.user,
        // profileViewer: this.props.location.state.user,
        // sameProfile: this.props.profileUser._id === this.props.profileViewer,
    }

    async componentDidMount() {
        console.log("CDM THISPROPSLOCATOINSTATE USER", this.props.profileUser.userId);
        const userResponse = await API.getUser(this.props.profileUser.userId);
        console.log("Profile is of:", userResponse);

        userResponse.status === 200 && this.setState({
            profileUser: userResponse.data,
        });
    }

    render() {
        console.log("PROFILE PROPS", this.props);
        console.log("THIS STATE profile User", this.state.profileUser);
        return (
            <Container>
                <Row fluid>
                    <Jumbotron
                        fluid
                        styles={
                            {
                                height: "12rem",
                                backgroundImage: "url('https://cdn.solace.com/wp-content/uploads/2019/01/bg-clouds.jpg')"
                            }
                        }
                        className="d-flex justify-content-end align-items-end p-0 rounded"
                    >
                        <span className="display-4 ml-auto mt-auto p-0">{this.state.profileUser.displayName}</span>
                    </Jumbotron>
                </Row>
                <hr />
                <Row fluid>
                    <Col size="md-6">
                        <h4>Skills</h4>
                        <ul className="list-group list-group-flush">
                            {this.state.profileUser.skills && this.state.profileUser.skills.forEach(skill => {
                                return (
                                    <li className="list-group-item p-1">

                                    </li>
                                )
                            })}
                        </ul>
                    </Col>
                    <Col size="md-6">
                        <h4>Needs</h4>
                        <ul className="list-group list-group-flush">
                            {this.state.profileUser.needs && this.state.profileUser.needs.forEach(need => {
                                return (
                                    <li className="list-group-item p-1">

                                    </li>
                                )
                            })}
                        </ul>
                    </Col>
                </Row>
                <Row fluid>
                    <Col size="auto">
                        <h4>Member of:</h4>
                        {this.state.profileUser.communities.length}
                        <ul className="list-group list-group-flush">
                            {
                                this.state.profileUser.communities && this.state.profileUser.communities.map(community => {
                                    return (
                                        <li className="list-group-item p-1">
                                            {community}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Profile;