import React, { Component } from "react";
import { Container, Row } from "../../components/UniversalComponents/Grid";
import UserSidebar from "../../components/UniversalComponents/UserSidebar";
import CommunityPanel from "../../components/CommunityComponents/CommunityPanel";
// import translate from '../../i18n/translate';
import API from "../../utils/API";
import { Redirect } from "react-router-dom";

class Community extends Component {
    state = {
        user: {
            displayName: "Dem O. User",
            username: "DemoUser"
        },
        community: {
            title: "Middletown Mutual Aid",
            admins: [],
            memberCount: 45,
            position: "Administrator",
            id: 1,
            headerImage: "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/cumulus-cloud.jpg/",
            alerts: ["a", 2],
            about: "This is our page for Middletown Mutual Aid! Love you xoxo"
        },
        activePage: "MessageBoards",
        threadIds: [],
        threadObjects: [],
        createThread: {
            title: "",
            author: "",
            body: "",
            community: this.props.match.params.id,
        },
        reload: false,
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        console.log("id", id);
        console.log("props.match", this.props.match.params);

        await API.getCommunity(id)
            .then(response => {
                console.log('did mount ran')
                return this.setState({
                    community: response.data,
                    threadIds: response.data.threads,
                })
            }).then(async () => {
                const getThreadsResponse = await API.getThreads(id);
                this.setState({
                    threadObjects: getThreadsResponse.data,
                });
            })
        
        this.props.location.state && this.setState({
            user: this.props.location.state.user,
        })
    }

    createThreadHandleChange = e => {
        const { name, value } = e.target;

        let oldCreateThread = this.state.createThread;
        oldCreateThread[name] = value;

        this.setState({
            createThread: oldCreateThread,
        })
    }

    createThreadHandleClick = async e => {
        e.preventDefault();

        const newThread = this.state.createThread;
        newThread.community = this.state.community.communityName;
        newThread.author = this.state.user._id;
        
        const response = await API.createThread(newThread)
        console.log(response);

        console.log("does this mean we're reloading???");
        response.status === 200 && this.setState({
            reload: true,
        })
    }

    render() {
        console.log("this.state", this.props.location.state);
        return (
            <Container>
                {/* {!this.props.location.state && <Redirect to="/" />} */}
                {this.state.reload && <Redirect to={
                        {pathname: `/community/${this.state.community.communityName}/board`},
                        {state: {
                            user: this.state.user}
                        }
                    } />}
                <Row className="my-4">
                    {/* {translate} */}
                    <UserSidebar user={this.state.user} />
                    <CommunityPanel
                        userEmail={this.state.user.email}
                        userId={this.state.user._id}
                        userIsAdmin={this.state.community.creator === this.state.user._id}
                        headerImage={this.state.community.headerImage || ""}
                        title={this.state.community.communityName}
                        alerts={this.state.community.alerts}
                        description={this.state.community.description}
                        about={this.state.community.about}
                        active={this.state.activePage}
                        threadObjects={this.state.threadObjects}
                        // reload={this.state.reload}
                        createThreadHandleChange={this.createThreadHandleChange}
                        createThreadHandleClick={this.createThreadHandleClick}
                        createThread={this.state.createThread}
                        createReplyHandleChange={this.createReplyHandleChange}
                        createReplyHandleClick={this.createReplyHandleClick}
                        createReply={this.state.createReply}
                    />
                </Row>
            </Container >
        )
    }
}

export default Community;