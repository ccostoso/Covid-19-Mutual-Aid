import React from "react";
import { Col } from "../../UniversalComponents/Grid";
import { UserPanelNav } from "../UserPanelNav";
import { UserCommunities } from "../UserCommunities";

export const UserPanel = props => {
    return (
        <Col size="md-10" className="border-left">
            <UserPanelNav />
            <UserCommunities {...props} />
        </Col>
    )
};