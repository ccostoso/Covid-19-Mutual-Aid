import React from "react";

export const Jumbotron = ({fluid, children, className, styles}) => {
    return (
        <div 
            className={`jumbotron jumbotron${fluid ? "-fluid" : ""} ${className ? className : ""}`}
            style={styles}
        >
            {children}
        </div>
    )
}