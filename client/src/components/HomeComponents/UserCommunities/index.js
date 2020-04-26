import React, { Component } from "react";
import { Row } from "../../UniversalComponents/Grid";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import translate from '../../../i18n/translate';
import { CreateCommunityModal } from "../CreateCommunityModal";
import { UserCommunityListCard } from "../UserCommunityListCard";
import UserFindCommunities from "../UserFindCommunities";
import UserMyCommunities from "../UserMyCommunities";
import API from "../../../utils/API";

class UserCommunities extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        tenLatestCommunities: [],
    }

    async componentDidMount() {
        const response = await API.getCommunities();
        console.log("!!!!!!!!!!!!!!!!!!!!!!");
        console.log(response);

        this.setState({
            tenLatestCommunities: response.data,
        })
    }

    render() {
        console.log("USER COMMUNITIES DISPLAY PROPS", this.props);
        return (
            <main>
                {/* <section className="d-flex justify-content-between"> */}
                {/* <h4>{translate("My Communities")}</h4> */}
                {/* <button className="btn btn-sm btn-info">Create Community</button> */}

                {/* </section> */}
                {/* <hr /> */}
                <section className="row">
                    <div className="col-md-4 d-flex justify-content-center">
                        <Link
                            to={
                                {
                                    pathname: `/home/${this.props.user._id}/`,
                                    state: {
                                        user: this.props.user,
                                        communities: this.props.communities,
                                    }
                                }
                            }
                            className="btn btn-secondary"
                        >
                            My Communities
                        </Link>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <Link
                            to={
                                {
                                    pathname: `/home/${this.props.user._id}/find`,
                                    state: {
                                        user: this.props.user,
                                    }
                                }
                            }
                            className="btn btn-secondary mx-auto"
                        >
                            Find Communities
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <CreateCommunityModal {...this.props} />
                    </div>
                </section>
                <hr />
                {/* <Router>  */}
                    <Switch>
                        <Route
                            exact path={`/home/:userId/`}
                            render={() => {
                                return (
                                    <UserMyCommunities
                                        user={this.props.user}
                                        communities={this.props.communities}
                                    />
                                )
                            }}
                        />
                        <Route
                            path={`/home/:userId/find/`}
                            render={() => {
                                return (
                                    <UserFindCommunities
                                        user={this.props.user}
                                    />
                                )
                            }}
                        />
                    </Switch>
                {/* </Router> */}
            </main>
        )
    }

};

export default UserCommunities;