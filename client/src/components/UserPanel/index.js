import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Col } from "../Grid";
import { UserCommunities } from "../UserCommunities";
import { UserPanelNav } from "../UserPanelNav";

export const UserPanel = props => {
    return (
        // <Router>
            <Col size="md-10" className="border-left">
                <UserPanelNav />
                {/* <Route
                    path="/home"
                    render={(props) => <UserCommunities {...props} communities={props.communities} />}
                /> */}
                <UserCommunities communities={props.communities} />
            </Col>
        //{/* </Router> */}
    )
};
