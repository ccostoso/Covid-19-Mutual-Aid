import React, { Component } from "react";
import { Container, Row } from "../../components/UniversalComponents/Grid";
import { UserSidebar } from "../../components/UniversalComponents/UserSidebar";
import { CommunityPanel } from "../../components/CommunityComponents/CommunityPanel";
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
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        console.log("id", id);
        console.log("props.match", this.props.match.params);

        API.getCommunity(id)
            .then(response => {
                console.log(response.data.threads);
                return this.setState({
                    threadIds: response.data.threads,
                })
            }).then(response => {
                console.log("comp did mount then response", response);
                console.log("state threadIds", this.state.threadIds);
                const threadIds = this.state.threadIds;
                return threadIds;
            }).then(threadIds => {
                threadIds.forEach(async threadId => {
                    const response = await API.getThread(threadId);
                    console.log(response.data);
                    let newThreadObjects = this.state.threadObjects;
                    newThreadObjects.unshift(response.data);
                    this.setState({
                        threadObjects: newThreadObjects,
                    });
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

        console.log(this.props.match.params);

        const newThread = this.state.createThread;
        newThread.community = this.props.match.params.id;

        API.createThread(newThread)
            .then(response => {
                const { id } = this.props.match.params;
                console.log("id", id);
                console.log("props.match", this.props.match.params);

                API.getCommunity(id)
                    .then(response => {
                        console.log(response.data.threads);
                        return this.setState({
                            threadIds: response.data.threads,
                        })
                    }).then(response => {
                        console.log("comp did mount then response", response);
                        console.log("state threadIds", this.state.threadIds);
                        const threadIds = this.state.threadIds;
                        return threadIds;
                    }).then(threadIds => {
                        threadIds.forEach(async threadId => {
                            const response = await API.getThread(threadId);
                            console.log(response.data);
                            let newThreadObjects = this.state.threadObjects;
                            newThreadObjects.push(response.data);
                            newThreadObjects.sort((a, b) => (a.date < b.date));
                            this.setState({
                                threadObjects: newThreadObjects,
                            });
                        })
                    })
            })
    }

    render() {
        return (
            <Container>
                <Row className="my-4">
                    <UserSidebar user={this.state.user} />
                    <CommunityPanel
                        headerImage={this.state.community.headerImage}
                        title={this.state.community.title}
                        alerts={this.state.community.alerts}
                        about={this.state.community.about}
                        active={this.state.activePage}
                        threadObjects={this.state.threadObjects}
                        createThreadHandleChange={this.createThreadHandleChange}
                        createThreadHandleClick={this.createThreadHandleClick}
                        createThread={this.state.createThread}
                    />
                </Row>
            </Container >
        )
    }
}

export default Community;