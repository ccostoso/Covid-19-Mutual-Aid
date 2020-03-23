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
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>

            <div class="collapse navbar-collapse" id="navbar-content">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/register">About <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/home">Account</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}