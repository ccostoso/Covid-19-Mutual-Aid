import React from "react";
import { Container, Row, Col } from "../../UniversalComponents/Grid";
import { Alert } from "../../UniversalComponents/Alert";
import { CommunityBoardPost } from "../CommunityBoardPost";
import { CreateThreadModal } from "../CreateThreadModal";

export const CommunityBoard = props => {
    return (
        <Container fluid className="p-0">
            <Row>
                <Col size="md-6">
                    <h4>Message Board</h4>
                </Col>
                <Col size="md-6" className="d-flex pb-2">
                    <CreateThreadModal
                        createThread={props.createThread}
                        createThreadHandleChange={props.createThreadHandleChange}
                        createThreadHandleClick={props.createThreadHandleClick}
                    />
                </Col>
            </Row>
            {props.threadObjects.map(thread => <CommunityBoardPost
                createThread={props.createThread}
                createThreadHandleChange={props.createThreadHandleChange}
                createThreadHandleClick={props.createThreadHandleClick}
                thread={thread}
                key={thread._id}
            />)}
        </Container>
    )
}