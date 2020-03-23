import React from "react";
import { Col, Row } from "../Grid";
import { Link } from "react-router-dom";
import { UserCommunities } from "../UserCommunities";

export const UserPanel = props => {
    return (
        <Col size="md-10" className="border-left">
            <div>
                <p>HELLO</p>
            </div>
            <UserCommunities communities={props.communities} />
        </Col>
    )
};
