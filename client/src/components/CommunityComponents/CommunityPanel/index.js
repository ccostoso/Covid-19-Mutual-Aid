import React from "react";
import { Col } from "../../UniversalComponents/Grid";
import { CommunityPanelNav } from "../CommunityPanelNav";
// import { CommunityBoard } from "../CommunityBoard";

export const CommunityPanel = props => {
    return (
        <Col size="md-10" className="border-left">
            <CommunityPanelNav isAdmin={true} />
            {/* <CommunityBoard {...props} /> */}
        </Col>
    )
};