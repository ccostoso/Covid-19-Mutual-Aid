import React from "react";
import { Container, Row, Col } from "../../UniversalComponents/Grid";
import { Alert } from "../../UniversalComponents/Alert";
import { CommunityAbout } from "../CommunityAbout";
import { CommunityNews } from "../CommunityNews";
import translate from '../../../i18n/translate';

export const NewsAndAlerts = ({ newsPosts, alerts, about }) => {
    return (
        <Container fluid className="p-0">
            <CommunityAbout about={about} />
            <Row>
                <CommunityNews newsPosts={newsPosts} />
                <Col size="md-6">
                    <h4>{translate("Alerts")}</h4>
                    {alerts && alerts.map(alert => <Alert>{alert}</Alert>)}
                </Col>
            </Row>
        </Container>
    )
}