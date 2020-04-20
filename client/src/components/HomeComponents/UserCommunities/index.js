import React from "react";
import { Row } from "../../UniversalComponents/Grid";
import { Link } from "react-router-dom";
import translate from '../../../i18n/translate';
import { CreateCommunityModal } from "../CreateCommunityModal";
import { UserCommunityListCard } from "../UserCommunityListCard";

export const UserCommunities = props => {
    console.log("USER COMMUNITIES DISPLAY PROPS", props);
    return (
        <main>
            <section className="d-flex justify-content-between">
                <h4>{translate("My Communities")}</h4>
                {/* <button className="btn btn-sm btn-info">Create Community</button> */}
                <CreateCommunityModal {...props} />
            </section>


            <hr />
            <Row>
                {props.communities && props.communities.map(community => {
                    return (
                        <UserCommunityListCard
                            user={props.user}
                            community={community}
                            key={community._id}
                        />
                    )
                })}
            </Row>
        </main>
    )
};