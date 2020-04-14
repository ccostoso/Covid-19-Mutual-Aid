import React from "react";
import { Container } from "../../UniversalComponents/Grid";
import translate from '../../../i18n/translate';

export const CommunityNews = ({newsPosts}) => {
    return (
        <Container className="col-md-6">
            <h4>{translate("News")}</h4>
            {/* {newsPosts.map(newsPost => {
                <div className="card">
                    <div className="card-header">
                        
                    </div>
                    <div className="card-body">
                        
                    </div>
                </div>
            })} */}
        </Container>
    )
}