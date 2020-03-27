import React from "react";
import { Col } from "../../components/UniversalComponents/Grid";
import { CommunityPanelNav } from "../CommunityPanelNav";
import { CommunityBoard } from "../CommunityBoard";

export const CommunityComponents = props => {
    return (
        <Col size="md-10" className="border-left">
            <CommunityPanelNav />
            <CommunityBoard {...props} />
        </Col>
    )
};