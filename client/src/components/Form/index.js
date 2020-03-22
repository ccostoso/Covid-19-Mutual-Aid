import React from "react";

export const Input = props => {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    )
}

export const TextArea = props => {
    return (
        <div className="form-group">
            <textarea className="form-control" rows={`${props.rows}` && "20"} {...props}/>
        </div>
    )
}