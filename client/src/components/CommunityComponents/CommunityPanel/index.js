import React from "react";
import { Col } from "../../UniversalComponents/Grid";
import { CommunityPanelHeader } from "../CommunityPanelHeader";
import { CommunityPanelNav } from "../CommunityPanelNav";
// import { CommunityBoard } from "../CommunityBoard";

export const CommunityPanel = ({headerImage, title}) => {
    return (
        <Col size="md-10" className="border-left">
            <CommunityPanelHeader 
                headerImage={headerImage}
                title={title}
            />
            <CommunityPanelNav isAdmin={true} />
            {/* <CommunityBoard {...props} /> */}
        </Col>
    )
};