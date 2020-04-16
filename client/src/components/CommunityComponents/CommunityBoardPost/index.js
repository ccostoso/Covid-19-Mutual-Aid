import React from "react";
import { Row } from "../../UniversalComponents/Grid";

export const CommunityBoardPost = ({ thread }) => {
    return (
        <div className="card mb-4">
            <div className="card-header">
                <div><strong>{thread.title}</strong> by {thread.author}</div>
            </div>
            <div className="card-body">{thread.body}</div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex border-top p-1">
                    <button className="btn btn-sm btn-info ml-auto">
                        Reply
                    </button>
                </li>
            </ul>
        </div>
    )
}