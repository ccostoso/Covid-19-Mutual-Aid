import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const UserPanelNav = props => {
    return (
        <ul className="nav nav-pills nav-fill border-bottom pb-1 mb-2">
            <li className="nav-item">
                <Link className="nav-link active" to="#">Communities</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#">Messages</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#">Settings</Link>
            </li>
        </ul>
    )
}