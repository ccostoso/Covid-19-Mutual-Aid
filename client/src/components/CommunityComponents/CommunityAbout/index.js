import React from "react";

export const CommunityAbout = ({about}) => {
    // console.log(about);
    return (
        <div className="card mb-3">
            <div className="card-body">
                {about}
            </div>
        </div>
    )
}