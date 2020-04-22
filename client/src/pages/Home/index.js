import React, { Component } from "react";
import { Container, Row } from "../../components/UniversalComponents/Grid";
import { UserPanel } from "../../components/HomeComponents/UserPanel";
import UserSidebar from "../../components/UniversalComponents/UserSidebar";
import API from "../../utils/API";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        user: {
        },
        communities: [
            
        ],
        createCommunity: {
            communityName: "",
            creator: "",
            description: "",
        },
    }

    async componentDidMount() {
        // this.setState({
        //     user: this.props.user
        // });

        // console.log("CDM THIS PROPS", this.props)
        // const { userId } = this.props.user;
        // console.log("userId", userId);
        // // console.log("props.match", this.props.match.params);
        
        const getUserResponse = await API.getUser(this.props.user.userId);

        getUserResponse.status === 200 && this.setState({
                user: getUserResponse.data,
            });

        const getUserCommunities = await API.getCommunities(this.props.user.userId);

        getUserCommunities.status === 200 && this.setState({
            communities: getUserCommunities.data,
        })

        // await API.getUser(userId)
        //     .then(res => {
        //         console.log(res.data);
        //         this.setState({
        //             user: res.data
        //         })
        //     })
        //     .then(res => {
        //         console.log("hitting getUser res")
        //         const userCommunities  = this.state.user.communities;
        //         const communityObjects = [];
        //         console.log([userCommunities]);
        //         console.log(communityObjects);

        //         userCommunities.forEach(async communityId => {
        //             const response = await API.getCommunityById(communityId);
        //             console.log("response for getCommunity", response);
        //             communityObjects.unshift(response.data);
        //             this.setState({
        //                 communities: communityObjects
        //             })
        //         })
        //     })
        //     .catch(err => console.log(err));
    }

    createCommunityHandleChange = e => {
        const { name, value } = e.target;

        let newCreateCommunity = this.state.createCommunity;
        newCreateCommunity[name] = value;

        this.setState({
            createCommunity: newCreateCommunity,
        })
    }

    createCommunityHandleClick = async e => {
        e.preventDefault();

        let newCommunity = this.state.createCommunity;
        newCommunity["creator"] = this.state.user._id;
        console.log(newCommunity);

        const createCommunityResponse = await API.createCommunity(newCommunity);

        console.log("response", createCommunityResponse)
        if (createCommunityResponse.status === 200) {
            this.getUser(this.state.user._id); 
        }
    }

    getUser = userId => {
        console.log("am i even hitting this")
        API.getUser(userId)
            .then(res => {
                console.log(res.data);
                this.setState({
                    user: res.data
                })
            })
            .then(res => {
                console.log("hitting getUser res")
                const userCommunities  = this.state.user.communities;
                const communityObjects = [];
                console.log(communityObjects);

                userCommunities.forEach(async communityId => {
                    const response = await API.getCommunityById(communityId);
                    console.log("response for getCommunity", response);
                    communityObjects.unshift(response.data);
                })

                this.setState({
                    communities: communityObjects
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state)
        return (
            <Container>
                <Row className="my-4">
                    <UserSidebar user={this.state.user} />
                    <UserPanel 
                        user={this.state.user}
                        communities={this.state.communities}  
                        createCommunityHandleChange={this.createCommunityHandleChange}
                        createCommunityHandleClick={this.createCommunityHandleClick}
                        createCommunity={this.state.createCommunity}
                    />
                </Row>
            </Container>
        )
    }
}

export default Home;