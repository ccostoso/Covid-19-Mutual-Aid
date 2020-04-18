import React, { Component } from "react";
import { Row } from "../../UniversalComponents/Grid";
import { CreateReplyModal } from "../CreateThreadModal";
import { CommunityBoardPostReply } from "../CommunityBoardPostReply";

export const CommunityBoardPost = props => {

    console.log(props.thread.replyObjects);
    const { thread } = props;
    console.log("thread", thread);
    console.log(JSON.stringify(props.thread["replyObjectsArray"]));
    const replies = props.thread["replyObjectsArray"];
    console.log("REPLIES", replies);

    console.log(props);
    return (
        <div className="card mb-4">
            <div className="card-header">
                <div><strong>{props.thread.title}</strong> by {props.thread.authorName}</div>
            </div>
            <div className="card-body">{props.thread.body}</div>
            <ul className="list-group list-group-flush">
                {replies && replies.map(reply => {
                    return <CommunityBoardPostReply reply={reply} />
                })}
                <li className="list-group-item d-flex p-1">
                    <CreateReplyModal
                        {...props}
                    />
                </li>
            </ul>
        </div>
    )
};