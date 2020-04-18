import React, { Component } from "react";
import { Container, Row } from "../../components/UniversalComponents/Grid";
import { UserSidebar } from "../../components/UniversalComponents/UserSidebar";
import { CommunityPanel } from "../../components/CommunityComponents/CommunityPanel";
// import translate from '../../i18n/translate';
import API from "../../utils/API";

class Community extends Component {
    state = {
        user: {
            displayName: "Dem O. User",
            username: "DemoUser"
        },
        community: {
            title: "Middletown Mutual Aid",
            memberCount: 45,
            position: "Administrator",
            id: 1,
            headerImage: "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/cumulus-cloud.jpg/",
            alerts: ["a", 2],
            about: "This is our page for Middletown Mutual Aid! Love you xoxo"
        },
        activePage: "NewsAndAlerts",
        threadIds: [],
        threadObjects: [],
        createThread: {
            title: "",
            author: "",
            body: "",
            community: this.props.match.params.id,
        },
        createReply: {
            author: "",
            body: "",
            community: this.props.match.params.id,
        }
    }

    async componentWillMount() {
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
            }).then(response => {
                const threadIds = this.state.threadIds;
                let newThreadObjects = this.state.threadObjects;
                console.log("original thread object values", newThreadObjects)
                threadIds.forEach(async threadId => {
                    console.log("threadId", threadId);
                    const response = await API.getThread(threadId);
                    console.log("AWAIT RESPONSE", response)
                    newThreadObjects.unshift(response.data);
                    this.setState({
                        threadObjects: newThreadObjects,
                    }, this.getReplies(id));
                })
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

    createThreadHandleClick = e => {
        e.preventDefault();

        const newThread = this.state.createThread;
        newThread.community = this.props.match.params.id;
        console.log(e.target);
        console.log(e.target.title);
        console.log(e.target.id);
        
        API.createThread(newThread);
    }

    getReplies = communityId => {
        let oldThreadObjectsArray = this.state.threadObjects;
        console.log('oldThreadObjects', oldThreadObjectsArray);
        console.log('oldThreadObjects length', oldThreadObjectsArray.length);
        const newThreadObjectsArray = [];
        oldThreadObjectsArray.map( threadObj => {
            // console.log("threadObj", threadObj._id);
             API.getReplies(threadObj._id)
                .then(response => {
                    // console.log("THREAD OBJ IN THEN", threadObj)
                    // console.log("response LINE 138", response);
                    // console.log("NEW UPDATED THREAD OBJ", {...threadObj, replyObjectsArray : response.data})
                    return {...threadObj, replyObjectsArray : response.data}
                }).then(res => {
                    newThreadObjectsArray.push(res)
                    this.setState({
                        threadObjects: newThreadObjectsArray,
                    });
                })
                console.log("FINAL STATE UPDATED", newThreadObjectsArray)
        });
        // console.log("newThreadObjectsArray", newThreadObjectsArray);
    }

    createReplyHandleChange = e => {
        // console.log("change");
        const { name, value } = e.target;

        let oldCreateReply = this.state.createReply;
        oldCreateReply[name] = value;

        this.setState({
            createReply: oldCreateReply,
        })
    }

    createReplyHandleClick = e => {
        const { id } = e.target;

        e.preventDefault();

        const newReply = this.state.createReply;
        newReply.parentThread = id;
        // console.log(newReply);
        // console.log(e.target);
        // console.log(e.target.title);
        // console.log(e.target.id);

        API.createReply(newReply);

        this.setState({
            createReply: {
                author: "",
                body: "",
                community: this.props.match.params.id,
            }
        })
    }

    render() {
        return (
            <Container>
                <Row className="my-4">
                    {/* {translate} */}
                    <UserSidebar user={this.state.user} />
                    <CommunityPanel
                        headerImage={this.state.community.headerImage || ""}
                        title={this.state.community.communityName}
                        alerts={this.state.community.alerts}
                        about={this.state.community.about}
                        active={this.state.activePage}
                        threadObjects={this.state.threadObjects}
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