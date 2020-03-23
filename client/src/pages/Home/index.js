import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
// import { Input, FormBtn } from "../../components/Form";
import { Link } from "react-router-dom";
import { API } from "../../utils/API";

class Home extends Component {
    state = {
        username: "DemoUser"
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
                    <Col size="md-10" className="border-left border-right">

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;