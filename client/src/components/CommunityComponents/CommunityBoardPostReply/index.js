import React from "react";

export const CommunityBoardPostReply = (props) => {
    console.log("REPLY PROPS", props)
    return (
        <li className="list-group-item border-top p-4">
            <strong>{props.reply.authorName}</strong>
            <br />
            <small>Responding at {props.reply.date}</small>
            <br />
            {props.reply.body}
        </li>
    )
}