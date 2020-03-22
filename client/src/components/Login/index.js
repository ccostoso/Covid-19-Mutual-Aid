import React from "react";

export const Jumbotron = ({fluid, children}) => {
    return <div className={`jumbotron${fluid && " jumbotron-fluid"}`}>{children}</div>
}