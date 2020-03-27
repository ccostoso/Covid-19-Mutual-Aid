import React from "react";
import { Jumbotron } from "../../UniversalComponents/Jumbotron";

export const CommunityPanelHeader = ({ headerImage, title }) => {
    return (
        <Jumbotron
            fluid
            styles={
                {
                    height: "12rem",
                    backgroundImage: `url(${headerImage})`
                }
            }
            className="d-flex justify-content-end align-items-end p-0"
        >
            <span className="display-4 ml-auto mt-auto p-0">{title}</span>
        </Jumbotron>
    )
}