import React from "react";
import { Row } from "../../UniversalComponents/Grid";

export const CommunityBoardPost = ({ post }) => {
    return (
        <div className="card">
            <div className="card-header">
                <div><strong>{post.title}</strong> by {post.poster}</div>
            </div>
            <div className="card-body">{post.body}</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex border-top p-1">
                    <button className="btn btn-sm btn-info ml-auto">
                        Reply
                    </button>
                </li>
            </ul>
        </div>
    )
}