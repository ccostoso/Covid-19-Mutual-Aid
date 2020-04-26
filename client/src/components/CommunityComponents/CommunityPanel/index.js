import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Col } from "../../UniversalComponents/Grid";
import { CommunityPanelHeader } from "../CommunityPanelHeader";
import { CommunityPanelNav } from "../CommunityPanelNav";
import NewsAndAlerts from "../NewsAndAlerts";
import CommunityBoard from "../CommunityBoard";
import CommunitySettings from "../CommunitySettings";
import API from "../../../utils/API.js";

class CommunityPanel extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        userIsAdmin: false,
        userIsMember: false,
    }

    componentDidMount() {
        // console.log("CDM STATE IS ADMIN?", this.state.userIsAdmin);
        // console.log("CDM STATE IS MEMBER?", this.state.userIsMember);
        // console.log("CDM PROPS IS ADMIN?", this.props.userIsAdmin);
        // console.log("CDM PROPS IS MEMBER?", this.props.userIsMember);
        // console.log("CDM THIS PROPS", this.props);
        this.setState({
            userIsAdmin: this.props.userIsAdmin,
            userIsMember: this.props.userIsMember,
        })
    }

    render() {
        // console.log("COMMUNITY PANEL", this.props);
        // console.log("!!!!!!");
        // console.log("COMMUNITY PANEL USER IS ADMIN?", this.props.userIsAdmin);
        // console.log("COMMUNITY PANEL USER IS MEMBER?", this.props.userIsMember);
        return (
            <Col size="md-10" className="border-left">
                <CommunityPanelHeader
                    headerImage={this.props.headerImage}
                    title={this.props.title}
                />
                <Router>
                    <CommunityPanelNav 
                        userIsAdmin={this.props.userIsAdmin} 
                        title={this.props.title}
                    />
                    <Route path={`/community/${this.props.title}/board`} render={() => {
                        return (
                            <CommunityBoard
                                userJoined={this.props.userIsAdmin || this.props.userIsMember}
                                userEmail={this.props.userEmail}
                                userId={this.props.userId}
                                communityTitle={this.props.title}
                                threadObjects={this.props.threadObjects}
                                // reload={this.props.reload}
                                createThread={this.props.createThread}
                                createThreadHandleChange={this.props.createThreadHandleChange}
                                createThreadHandleClick={this.props.createThreadHandleClick}
                                createReply={this.props.createReply}
                                createReplyHandleChange={this.props.createReplyHandleChange}
                                createReplyHandleClick={this.props.createReplyHandleClick}
                            />
                        )
                    }
                    } />
                    <Route path={`/community/${this.props.title}/news`} render={() => {
                        return (
                            <NewsAndAlerts
                                title={this.props.title}
                                alerts={this.props.alerts}
                                userId={this.props.userId}
                                // about={this.props.about}
                                about={this.props.description}
                                userJoined={this.props.userIsAdmin || this.props.userIsMember}
                                userIsPending={this.props.userIsPending}
                            />
                        )
                    }
                    } />
                    <Route path={`/community/${this.props.title}/settings`} render={() => {
                        return (
                            <CommunitySettings
                                title={this.props.title}
                            />
                        )
                    }
                    } />
                </Router>
            </Col>
        )
    }
};

export default CommunityPanel;