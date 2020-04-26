import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import translate from '../../../i18n/translate';

export const CommunityPanelNav = props => {
    return (
        <ul className="nav nav-pills nav-fill border-bottom pb-1 mb-2">
            <li className="nav-item">
                <Link className="nav-link active" to={`/community/${props.title}/news`}>{translate("News and Alerts")}</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={`/community/${props.title}/board`}>{translate("Message Board")}</Link>
            </li>
            {props.userIsAdmin && (<li className="nav-item">
                <Link className="nav-link" to={`/community/${props.title}/settings`}>{translate("Settings")}</Link>
            </li>)}
        </ul>
    )
}