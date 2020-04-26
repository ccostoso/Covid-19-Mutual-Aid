import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../../utils/API";


class UserFindCommunitiesListCard extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        skillsInCommunity: [],
    }

    async componentDidMount() {
        const getCommunitySkills =  await API.getSkillsByCommunity(this.props.community._id);
        console.log("COMMUNITY SKILLS", getCommunitySkills);
        this.setState({
            skillsInCommunity: getCommunitySkills.data,
        })
    }

    render() {
        return (
            <li
                className="list-group-item"
                key={this.props.community._id}
            >
                <div className="d-flex justify-content-between">
                    <div>{this.props.community.communityName}</div>
                    <Link
                        className="btn btn-success btn-sm"
                        to={
                            {
                                pathname: `/community/${this.props.community.communityName}/news`,
                                state: {
                                    user: this.props.user
                                }
                            }
                        }
                    >
                        Go to Community!
                    </Link>
                </div>
                <div className="d-flex justify-content-between">
                    Skills: {this.state.skillsInCommunity.map(skill => {
                        const formattedName = skill.name + ", ";
                        return formattedName;
                    })}
                </div>
            </li>
        )
    }
}

export default UserFindCommunitiesListCard