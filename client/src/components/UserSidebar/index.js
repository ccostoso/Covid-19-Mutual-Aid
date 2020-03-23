import React from "react";
import { Row, Col } from "../Grid";

export const UserSidebar = props => {
    return (
        <Col size="md-3">
            <p>{props.user.displayName}</p>
            <p>{props.user.username}</p>
            <p>{props.user.needs}</p>
            <p>{props.user.skills}</p>
        </Col>
    )
}