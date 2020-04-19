import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Col } from "../../UniversalComponents/Grid";
import { CommunityPanelHeader } from "../CommunityPanelHeader";
import { CommunityPanelNav } from "../CommunityPanelNav";
import { NewsAndAlerts } from "../NewsAndAlerts";
import CommunityBoard from "../CommunityBoard";

class CommunityPanel extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        userIsAdmin: false,
    }

    componentDidMount() {
        this.setState({
            userIsAdmin: !this.props.userIsAdmin
        })
    }

    // console.log(threadObjects);
    // title,
    // active,
    // alerts,
    // about,
    // threadObjects,
    // createThread,
    // createThreadHandleChange,
    // createThreadHandleClick,
    // createReply,
    // createReplyHandleChange,
    // createReplyHandleClick

    render() {
        console.log("COMMUNITY PANEL", this.props);
        return (
            <Col size="md-10" className="border-left">
                <CommunityPanelHeader
                    headerImage={this.props.headerImage}
                    title={this.props.title}
                />
                <Router>
                    <CommunityPanelNav userIsAdmin={!this.state.userIsAdmin} />
                    <Route path={`/community/${this.props.title}/board`} render={() => {
                        return (
                            <CommunityBoard
                                communityTitle={this.props.title}
                                threadObjects={this.props.threadObjects}
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
                                alerts={this.props.alerts}
                                about={this.props.about}
                            />
                        )
                    }
                    } />
                    {/* <Route path={`/community/${this.props.title}/settings`} render={() => {
                        return (
                            <NewsAndAlerts
                                alerts={this.props.alerts}
                                about={this.props.about}
                            />
                        )
                    }
                    } /> */}
                </Router>
            </Col>
        )
    }
};

export default CommunityPanel;