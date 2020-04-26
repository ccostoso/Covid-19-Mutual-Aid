import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Col } from "../../UniversalComponents/Grid";
import { UserPanelNav } from "../UserPanelNav";
import UserCommunities from "../UserCommunities";
import UserFindCommunities from "../UserFindCommunities"

export const UserPanel = props => {
    console.log("USERPANEL PROPS", props)
    return (
        <Col size="md-10" className="border-left">
            <Router>
                <UserPanelNav {...props} />
                <Route path={`/home/:userId/`} render={() => {
                    return <UserCommunities {...props} />
                }} />

                <Route path={`/home/:userId/find`} render={() => {
                    return <UserFindCommunities {...props} />
                }} />
            </Router>
        </Col>
    )
};