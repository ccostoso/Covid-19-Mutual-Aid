import React from "react";
import { Row } from "../../UniversalComponents/Grid";
import { Link } from "react-router-dom";
import translate from '../../../i18n/translate';

export const UserCommunities = props => {
    return (
        <main>
            <h4>{translate("My Communities")}</h4>
            <hr />
            <Row>
                {props.communities.map(community => {
                    return (
                        <div className="col-md-6 mb-4" key={community.id}>
                            <section className="card">
                                <header className="card-header">
                                    {community.title}
                                </header>
                                <div className="card-body">
                                    <p>{community.memberCount}</p>
                                    <p>{community.position}</p>
                                    <Link to={`/community/${community.id}`} className="btn btn-success">{translate("Go to Community")}</Link>
                                </div>
                            </section>
                        </div>
                    )
                })}
            </Row>
        </main>
    )
};