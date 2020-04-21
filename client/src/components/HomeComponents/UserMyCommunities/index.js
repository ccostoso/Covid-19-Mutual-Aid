import React, { Component } from "react";
import { UserCommunityListCard } from "../UserCommunityListCard";

class UserMyCommunities extends Component {
    constructor(props) {
        super(props);
    }

    state = {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="row-fluid">
                <h4>MY COMMUNITIES</h4>
                <br />
                <div className="row">
                    {this.props.communities && this.props.communities.map(community => {
                        return (
                            <UserCommunityListCard
                                user={this.props.user}
                                community={community}
                                key={community._id}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default UserMyCommunities;