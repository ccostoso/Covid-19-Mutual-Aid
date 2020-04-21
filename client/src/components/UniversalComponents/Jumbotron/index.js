import React from "react";

export const Jumbotron = ({fluid, children, className, styles}) => {
    return (
        <div style={styles} className={`jumbotron jumbotron${fluid ? "-fluid" : ""} ${className ? className : ""}`}>
            {children}
        </div>
    )
}