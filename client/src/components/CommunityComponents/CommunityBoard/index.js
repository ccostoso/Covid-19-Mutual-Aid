import React from "react";
import { Container, Row, Col } from "../../UniversalComponents/Grid";
import { Alert } from "../../UniversalComponents/Alert";
import { CommunityBoardPost } from "../CommunityBoardPost";

export const CommunityBoard = ({ posts }) => {
    return (
        <Container fluid className="p-0">
            <Row>
                <Col size="md-6">
                    <h4>Message Board</h4>
                </Col>
                <Col size="md-6" className="d-flex pb-2">
                    <button className="btn btn-sm btn-success ml-auto">
                        Create a New Thread
                    </button>
                </Col>
            </Row>
            {posts.map(post => <CommunityBoardPost post={post} />)}
        </Container>
    )
}