import React from "react";
import { Row } from "../../UniversalComponents/Grid";
import { CreateReplyModal } from "../CreateThreadModal";
import { CommunityBoardPostReply } from "../CommunityBoardPostReply";

export const CommunityBoardPost = props => {
    console.log(props.thread.replyObjects);
    const { thread } = props;
    console.log("thread", thread);
    console.log(JSON.stringify(props.thread["replyObjects"]));
    return (
        <div className="card mb-4">
            <div className="card-header">
                <div><strong>{props.thread.title}</strong> by {props.thread.author}</div>
            </div>
            <div className="card-body">{props.thread.body}</div>
            <ul className="list-group list-group-flush">
                {/* {props.thread.replyObjects.map(replyObject => { 
                    return <CommunityBoardPostReply replyObject={replyObject}/>
                })} */
                JSON.stringify(thread)}
                <li className="list-group-item d-flex border-top p-1">
                    <CreateReplyModal
                        {...props}
                    />
                </li>
            </ul>
        </div>
    )
}