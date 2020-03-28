import React from "react";

export const Jumbotron = ({fluid, children, className, styles}) => {
    return (
        <div 
            className={`jumbotron ${fluid ? "jumbotron-fluid" : ""} ${className ? className : ""}`}
            style={styles}
        >
            {children}
        </div>
    )
}