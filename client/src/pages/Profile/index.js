import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "../../components/UniversalComponents/Grid";
import { Input, FormBtn } from "../../components/UniversalComponents/Form";
import API from "../../utils/API";
import { Jumbotron } from "../../components/UniversalComponents/Jumbotron";
import UserSidebar from "../../components/UniversalComponents/UserSidebar";
import ProfilePicture from "../../i18n/profilepicture/profilePic";

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        profileUser: {
            displayName: "Hi",
            skills: [],
            needs: [],
            communities: [1, 2, 3],
        },
        createSkill: {
            name: '',
            haver: this.props.profileUser.userId || "",
        },
        createNeed: {
            name: '',
            haver: this.props.profileUser.userId || "",
        },
        createAvatar: {
            src: null
        }
    }

    async componentDidMount() {
        console.log("CDM THISPROPSLOCATOINSTATE USER", this.props.profileUser.userId);
        const userResponse = await API.getUser(this.props.profileUser.userId);
        console.log("Profile is of:", userResponse);

        userResponse.status === 200 && this.setState({
            profileUser: userResponse.data,
        });
    }

    handleAddSkillChange = e => {
        const value = e.target.value;

        this.setState({
            createSkill: {
                ...this.state.createSkill,
                name: value,
            }
        })
    }

    handleAddNeedChange = e => {
        const value = e.target.value;

        this.setState({
            createNeed: {
                ...this.state.createNeed,
                name: value,
            }
        })
    }

    handleAddSkillClick = e => {
        e.preventDefault();

        API.createSkill(this.state.createSkill);


    }

    handleAddNeedClick = e => {
        e.preventDefault();

        API.createSkill(this.state.createNeed);


    }

    handleSetProfilePicture = event => {
        event.preventDefault()
        const src = 'https://vectorified.com/images/no-profile-picture-icon-13.png';
    
        this.setState({
          src: URL.createObjectURL(event.target.files[0])
        })
      }

    render() {
        console.log("PROFILE PROPS", this.props);
        console.log("THIS STATE profile User", this.state.profileUser);
        return (
            <Container className="mt-4">
                <Row>
                    <UserSidebar
                        user={this.state.profileUser}
                    />
                    <Col size="md-9">

                            <Jumbotron
                                fluid
                                styles={
                                    {
                                        height: "12rem",
                                        backgroundImage: "url('https://cdn.solace.com/wp-content/uploads/2019/01/bg-clouds.jpg')"
                                    }
                                }
                                className="d-flex justify-content-end align-items-end p-0 rounded"
                            >
                                <span className="display-4 ml-auto mt-auto p-0">{this.state.profileUser.displayName}</span>
                            </Jumbotron>

                        <hr />
                        <Row fluid>
                            <Col size="md-6">
                                <h4>Skills</h4>
                                <ul className="list-group list-group-flush">
                                    {this.state.profileUser.skills && this.state.profileUser.skills.forEach(skill => {
                                        return (
                                            <li className="list-group-item p-1">

                                            </li>
                                        )
                                    })}
                                </ul>
                                <Input
                                    name="newSkill"
                                    value={this.state.createSkill.name}
                                    onChange={this.handleAddSkillChange}
                                >
                                </Input>
                                
                            </Col>
                            <Col size="md-6">
                                <h4>Needs</h4>
                                <ul className="list-group list-group-flush">
                                    {this.state.profileUser.needs && this.state.profileUser.needs.forEach(need => {
                                        return (
                                            <li className="list-group-item p-1">

                                            </li>
                                        )
                                    })}
                                </ul>
                                <Input
                                    name="newNeed"
                                    value={this.state.createNeed.name}
                                    onChange={this.handleAddNeedChange}
                                >
                                </Input>
                            </Col>
                        </Row>
                        <Row fluid>
                            <Col size="auto">
                                <h4>Member of:</h4>
                                {this.state.profileUser.communities.length}
                                <ul className="list-group">
                                    {
                                        this.state.profileUser.communities && this.state.profileUser.communities.map(community => {
                                            return (
                                                <li className="list-group-item p-1">
                                                    {community}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </Col>
                            <Col size="auto">
                                <h4>Upload Avatar:</h4>
                                {this.state.createAvatar.src}
                                <ul className="list-group">
                                    {
                                        this.state.createAvatar.src && this.state.createAvatar.src.pull(src => {
                                            return (
                                                <div>
                                                {/* <input type="file" onChange={this.handleSetProfilePicture}/>
                                                <img src={this.state.src}/> */}
                                                <ProfilePicture />
                                                </div>
                                            )
                                        })
                                    }
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Profile;


{/* <div>
<p className='profilePicture'>{translate("Profile Picture")}</p>
    <Avatar
        width={390}
        height={295}
        onCrop={this.onCrop}
        onClose={this.onClose}
        onBeforeFileLoad={this.onBeforeFileLoad}
        src={this.state.src}
    />
    <img src={this.state.preview} alt="Preview" />
</div> */}