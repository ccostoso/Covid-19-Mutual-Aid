import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
// import { Input, FormBtn } from "../../components/Form";
import { Link } from "react-router-dom";
import { API } from "../../utils/API";

class Home extends Component {
    state = {
        username: "DemoUser",
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
                title: "Apartment Mutual Aid",
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
                    <Col size="md-2">
                        <p>{this.state.displayName}</p>
                        <p>{this.state.username}</p>
                        <p>{this.state.skills}</p>
                        <p>{this.state.needs}</p>
                    </Col>
                    <Col size="md-10" className="border-left">
                        <h4>My Communities</h4>
                        <hr />
                        <Row>
                            {this.state.communities.map(community => {
                                return (
                                    <div className="col-md-6 mb-3" key={community.id}>
                                        <section className="card">
                                            <header className="card-header">
                                                {community.title}
                                            </header>
                                            <div className="card-body">
                                                <p>{community.memberCount}</p>
                                                <p>{community.position}</p>
                                                <Link to={`/community/${community.id}`} className="btn btn-success">Go to Community</Link>
                                            </div>
                                        </section>
                                    </div>
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;