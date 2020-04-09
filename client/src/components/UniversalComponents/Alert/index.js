import React from "react";

export const Alert = ({ type, children }) => {
    return (
        <div className={`alert ${type ? `alert-${type}` : `alert-danger`}`} role="alert">
            {children}
        </div>
    )
}