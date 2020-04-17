import React from "react";
import { Row } from "../../UniversalComponents/Grid";
import { CreateReplyModal } from "../CreateThreadModal";

export const CommunityBoardPost = props => {
    return (
        <div className="card mb-4">
            <div className="card-header">
                <div><strong>{props.thread.title}</strong> by {props.thread.author}</div>
            </div>
            <div className="card-body">{props.thread.body}</div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex border-top p-1">    
                    {props.thread.child}
                </li>
                <li className="list-group-item d-flex border-top p-1">
                    <CreateReplyModal
                        {...props}
                    />
                </li>
            </ul>
        </div>
    )
}