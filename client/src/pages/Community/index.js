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

                    newThreadObjects.unshift(response.data);
                    this.setState({
                        threadObjects: newThreadObjects,
                    }, this.getThreads(id));
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

        // API.createThread(newThread)
        //     .then(response => {
        //         const { id } = this.props.match.params;
        //         console.log("id", id);
        //         console.log("props.match", this.props.match.params);

        //         API.getCommunity(id)
        //             .then(response => {
        //                 return this.setState({
        //                     threadIds: response.data.threads,
        //                 })
        //             }).then(response => {
        //                 const threadIds = this.state.threadIds;
        //                 return threadIds;
        //             }).then(threadIds => {
        //                 threadIds.forEach(async threadId => {
        //                     const response = await API.getThread(threadId);
        //                     let newThreadObjects = this.state.threadObjects;
        //                     newThreadObjects.push(response.data);
        //                     this.setState({
        //                         threadObjects: newThreadObjects,
        //                     }, this.getThreads(id));
        //                 })
        //             })
        //     })
    }

    getThreads = communityId => {
        // get threads and community information
        // let newThreadObjects;


        // const threadIds = this.state.threadIds;
        // let newThreadObjects = this.state.threadObjects;
        // console.log("original thread object values", newThreadObjects)
        // threadIds.forEach(async threadId => {
        //     const response = await API.getThread(threadId);

        //     newThreadObjects.unshift(response.data);
        //     this.setState({
        //         threadObjects: newThreadObjects,
        //     });
        // })

        let oldThreadObjectsArray = this.state.threadObjects;
        console.log('oldThreadObjects', oldThreadObjectsArray);
        console.log('oldThreadObjects length', oldThreadObjectsArray.length);
        const newThreadObjectsArray = []
        oldThreadObjectsArray.map( threadObj => {
            console.log("threadObj", threadObj._id);
             API.getReplies(threadObj._id)
                .then(response => {
                    console.log("THREAD OBJ IN THEN", threadObj)
                    console.log("response LINE 138", response);
                    console.log("NEW UPDATED THREAD OBJ", {...threadObj, replyObjectsArray : response.data})
                    return {...threadObj, replyObjectsArray : response.data}
                }).then(res => {
                    newThreadObjectsArray.push(res)
                    this.setState({
                        threadObjects: newThreadObjectsArray,
                    });
                })
                console.log("FINAL STATE UPDATED", newThreadObjectsArray)
        });
        console.log("newThreadObjectsArray", newThreadObjectsArray);


        //KEEEEEEEEEEEEEEEEEEEEEEEEP
        // return threadObjects;

        // })

        // API.getCommunity(communityId)
        //     .then(response => {
        //         // update state to have community information
        //         this.setState({
        //             community: response.data,
        //             threadIds: response.data.threads,
        //         })
        //         console.log("this.state", this.state);

        //         // declare variable of array of thread ids from state
        //         const threadIds = this.state.threadIds;

        //         // decalre newThreadObjects as copy of existing this.state.threadObjects
        //         newThreadObjects = this.state.threadObjects;

        //         // FIRST for each thread id in state.threadIds
        //         threadIds.forEach(threadId => {

        //             // call getThread from utils/API.js
        //             API.getThread(threadId)
        //                 .then(response => {

        //                     // get thread object with array of reply IDs
        //                     console.log("response for getThread/first loop", response);

        //                     // unshift response.data into newThreadObjects
        //                     newThreadObjects.unshift(response.data);

        //                     return newThreadObjects;
        //                 }).then(newThreadObjects => {
        //                     console.log("!!!! line 127 newThreadObjects", newThreadObjects);


        //                     // SECOND for each threadObject in array newThreadObjects
        //                     newThreadObjects.forEach(newThreadObj => {

        //                         // get reply objects from back end based on thread ID
        //                         const response = async () => {
        //                             API.getReplies(newThreadObj._id) => {

        //                             }
        //                         })
        //                             .then(response => {
        //                         console.log("response for getReplies/second loop", response);

        //                         // assign response.data to newThreadObj.replyObject
        //                         newThreadObj.replyObjects = response.data;
        //                     })
        //                     })

        //         })

        //         console.log("newThreadObjects after getThread call, before getReplies", newThreadObjects);

        //     })



        // this.setState({
        //     threadObjects: newThreadObjects
        // })

        // console.log("this.state", this.state);
        // })
    }

    createReplyHandleChange = e => {
        console.log("change");
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
        console.log(newReply);
        console.log(e.target);
        console.log(e.target.title);
        console.log(e.target.id);

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