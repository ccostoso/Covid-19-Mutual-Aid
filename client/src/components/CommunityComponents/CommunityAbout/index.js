import React from "react";

export const CommunityAbout = ({ about, userJoined, joinCommunityHandleClick }) => {
    // console.log(about);
    return (
        <div className="card mb-3">
            <div className="card-body">
                {about}
                <br />
                {
                    userJoined ? <div></div> :
                    <button className="btn btn-success btn-sm" onClick={joinCommunityHandleClick}>
                        Join this group!
                    </button>
                }
            </div>

        </div>
    )
}