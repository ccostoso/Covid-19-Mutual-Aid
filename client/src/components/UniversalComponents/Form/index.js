import React from "react";

export const Input = props => {
    return (
        <div className="form-group">
            {
                props.label
                ? 
                <label>{props.label}</label>
                :
                ""
            }
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

export const FormBtn = props => {
    return (
        <button className={`
                btn 
                btn-${props.btntype || "success"}
                ${props.btnsize ? `btn-${props.btnsize}` : "" }
                ${props.className ? props.className : ""}
            `} 
            {...props}
            >
                {props.children}
        </button>
    )
}