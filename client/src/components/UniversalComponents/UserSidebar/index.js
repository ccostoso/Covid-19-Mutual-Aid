import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "../../UniversalComponents/Grid";
import translate from "../../../i18n/translate";
import API from "../../../utils/API";

class UserSidebar extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        user: this.props.user,
    }

    handleLogout = e => {
        e.preventDefault();

        API.logout(this.props.user);
    }

    render() {
        return (
            <Col size="md-2">
                <p>{this.props.user.displayName}</p>
                <p>{this.props.user.email}</p>
                {/* <p>{user.needs}</p>
                <p>{user.skills}</p> */}
                <hr />
                <Link className="dropdown-item" to="/" onClick={this.handleLogout}>Logout</Link>
            </Col>
        )
    }
}

export default UserSidebar;