import React from "react";
import { Col } from "../Grid";
import { UserCommunities } from "../UserCommunities";
import { UserPanelNav } from "../UserPanelNav";

export const UserPanel = props => {
    return (
        <Col size="md-10" className="border-left">
            <UserPanelNav />
            <UserCommunities {...props} />
        </Col>
    )
};