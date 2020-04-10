import React from "react";
import { Col } from "../../UniversalComponents/Grid";
import { CommunityPanelHeader } from "../CommunityPanelHeader";
import { CommunityPanelNav } from "../CommunityPanelNav";
import { NewsAndAlerts } from "../NewsAndAlerts";
import { CommunityBoard } from "../CommunityBoard";

export const CommunityPanel = ({headerImage, title, active, alerts, about, posts}) => {
    return (
        <Col size="md-10" className="border-left">
            <CommunityPanelHeader 
                headerImage={headerImage}
                title={title}
            />
            <CommunityPanelNav isAdmin={true} />
            <CommunityBoard
                posts={posts}
            />
            {/* <NewsAndAlerts 
                alerts={alerts}
                about={about}
            /> */}
        </Col>
    )
};