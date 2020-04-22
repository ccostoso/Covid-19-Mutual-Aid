import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "../../UniversalComponents/Grid";
import UserFindCommunitiesListCard from "../UserFindCommunitiesListCard";
import API from "../../../utils/API";

class UserFindCommunities extends Router {
    constructor(props) {
        super(props);
    }

    state = {
        tenLatestCommunities: []
    }

    async componentDidMount() {
        console.log("UserFindCommunities did mount");
        const response = await API.getCommunities();
        console.log("!!!!!!!!!!!!!!!!!!!!!!");
        console.log(response);

        this.setState({
            tenLatestCommunities: response.data,
        })
    }

    render() {
        return (
            <Row fluid>
                <h4>Find a New Community</h4>
                <br />
                <ul className="list-group">
                    {this.state.tenLatestCommunities.map(community => {
                        return (
                            <UserFindCommunitiesListCard 
                                community={community}
                                user={this.props.user}
                            />

                            // <li
                            //     className="list-group-item d-flex justify-content-between"
                            //     key={community._id}
                            // >
                            //     <div>{community.communityName}</div>
                            //     <Link
                            //         className="btn btn-success btn-sm"
                            //         to={
                            //             {
                            //                 pathname: `/community/${community.communityName}`,
                            //                 state: {
                            //                     user: this.props.user
                            //                 }
                            //             }
                            //         }
                            //     >

                            //     </Link>
                            // </li>

                        )
                    })}
                </ul>
            </Row>
        )
    }
}

export default UserFindCommunities;