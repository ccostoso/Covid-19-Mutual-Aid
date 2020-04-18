import React from "react";

export const CommunityBoardPostReply = ({replyObject}) => {
    return (
        <li className="list-group-item d-flex border-top p-1">
            {replyObject.body}
        </li>
    )
}