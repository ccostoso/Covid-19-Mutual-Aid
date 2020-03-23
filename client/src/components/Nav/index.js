import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

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
                        <Link className="nav-link" to="/register">About <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Account</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}