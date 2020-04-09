import React from "react";
import { Container } from "../../UniversalComponents/Grid";

export const CommunityNews = ({newsPosts}) => {
    return (
        <Container className="col-md-6">
            <h4>News</h4>
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