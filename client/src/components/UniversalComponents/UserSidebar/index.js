import React from "react";
import { Col } from "../../UniversalComponents/Grid";

export const UserSidebar = ({ user }) => {
    return (
        <Col size="md-2">
            <p>{user.displayName}</p>
            <p>@{user.username}</p>
            <p>{user.needs}</p>
            <p>{user.skills}</p>
        </Col>
    )
}