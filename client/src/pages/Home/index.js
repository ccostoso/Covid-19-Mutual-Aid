import React, { Component } from "react";
import { Container, Row } from "../../components/UniversalComponents/Grid";
import { UserPanel } from "../../components/HomeComponents/UserPanel";
import { UserSidebar } from "../../components/UniversalComponents/UserSidebar";
import API from "../../utils/API";



class Home extends Component {
    state = {
        user: {
            displayName: "Dem O. User",
            email: "DemoUser",
            communities: [
                
            ]
        },
        communities: [
            // {
            //     title: "Middletown Mutual Aid",
            //     memberCount: 45,
            //     position: "Administrator",
            //     id: 1
            // },
            // {
            //     title: "Middlesex County Mutual Aid",
            //     memberCount: 255,
            //     position: "Member",
            //     id: 2
            // },
            // {
            //     title: "123 Fake Street Apt #45 Mutual Aid",
            //     memberCount: 19,
            //     position: "Moderator",
            //     id: 3
            // }
        ],
        createCommunity: {
            communityName: "",
            creator: "",
            description: "",
        },
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        console.log("id", id);
        console.log("props.match", this.props.match.params);
        
        await API.getUser(id)
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
                console.log([userCommunities]);
                console.log(communityObjects);

                userCommunities.forEach(async communityId => {
                    const response = await API.getCommunityById(communityId);
                    console.log("response for getCommunity", response);
                    communityObjects.unshift(response.data);
                    this.setState({
                        communities: communityObjects
                    })
                })
            })
            .catch(err => console.log(err));
    }

    createCommunityHandleChange = e => {
        const { name, value } = e.target;

        let newCreateCommunity = this.state.createCommunity;
        newCreateCommunity[name] = value;

        this.setState({
            createCommunity: newCreateCommunity,
        })
    }

    createCommunityHandleClick = e => {
        e.preventDefault();

        let newCommunity = this.state.createCommunity;
        newCommunity["creator"] = this.props.match.params.id;
        console.log(newCommunity);

        API.createCommunity(newCommunity);
    }

    render() {
        console.log(this.state)
        return (
            <Container>
                <Row className="my-4">
                    <UserSidebar user={this.state.user} />
                    <UserPanel 
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