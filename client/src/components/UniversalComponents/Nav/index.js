import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import translate from '../../../i18n/translate';

export const Nav = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="mr-auto">
                <Link className="navbar-brand" to="/">
                    MutuAid
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

            <div className="collapse navbar-collapse" id="navbar-content">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/register">{translate("About")} <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {translate("Account")}
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/messages">{translate("Messages")}</Link>
                            <Link className="dropdown-item" to="/settings">{translate("Settings")}</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

    )
}