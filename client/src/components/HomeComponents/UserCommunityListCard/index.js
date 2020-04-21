import React from "react";
import { Link } from "react-router-dom";
import translate from "../../../i18n/translate";

export const UserCommunityListCard = props => {
    return (
        <div className="col-md-6 mb-4" key={props.community.id}>
            <section className="card">
                <header className="card-header">
                    {props.community.communityName}
                </header>
                <div className="card-body">
                    <p>{props.community.memberCount}</p>
                    {/* <p>{props.community.position}</p */}
                    <Link to={
                        {
                            pathname: `/community/${props.community.communityName}/news`,
                            state: {
                                user: props.user
                            }
                        }
                    } className="btn btn-success">{translate("Go to Community")}</Link>
                </div>
            </section>
        </div>
    )
}