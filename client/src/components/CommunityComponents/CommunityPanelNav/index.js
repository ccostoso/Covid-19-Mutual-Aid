import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import translate from '../../../i18n/translate';

export const CommunityPanelNav = ({ isAdmin, isMod, unseenAlerts }) => {
    return (
        <ul className="nav nav-pills nav-fill border-bottom pb-1 mb-2">
            <li className="nav-item">
                <Link className="nav-link active" to="#">{translate("News and Alerts")}</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#">{translate("Message Board")}</Link>
            </li>
            {isAdmin && (<li className="nav-item">
                <Link className="nav-link" to="#">{translate("Settings")}</Link>
            </li>)}
        </ul>
    )
}