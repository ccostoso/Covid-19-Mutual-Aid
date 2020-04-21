import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import translate from '../../../i18n/translate';

export const UserPanelNav = props => {
    console.log("USER PANEL NAV PROPS", props);
    return (
        <ul className="nav nav-pills nav-fill border-bottom pb-1 mb-2" id="navColor">
            <li className="nav-item">
                <Link className="nav-link active" to="#">{translate("Communities")}</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#">{translate("Messages")}</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={
                    {
                        pathname: `/profile/${props.user._id}`,
                        state: {
                            user: props.user
                        }
                    }
                    }>{translate("Settings")}</Link>
            </li>
        </ul>
    )
}