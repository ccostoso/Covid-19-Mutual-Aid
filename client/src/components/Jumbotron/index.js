import React from "react";

export const Jumbotron = ({fluid, children, className}) => {
    return (
        <div className={`jumbotron jumbotron${fluid ? "-fluid" : ""} ${className ? className : ""}`}>
            {children}
        </div>
    )
}