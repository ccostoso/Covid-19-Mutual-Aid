import React from "react";
import { Input, FormBtn } from "../../UniversalComponents/Form";

export const CreateCommunityModal = props => {
    return (
        <section className="d-flex justify-content-center">
            {/* // < !--Button trigger modal-- > */}
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Create a Community
            </button>

            {/* // <!--Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create a New Thread</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Community Name:
                            <Input 
                                name="communityName" 
                                value={props.createCommunity.communityName}
                                onChange={props.createCommunityHandleChange}
                                placeholder="Community Name"
                            >
                                
                            </Input>
                            Community Description:
                            <Input 
                                name="description" 
                                value={props.createCommunity.description}
                                onChange={props.createCommunityHandleChange}
                                placeholder="Description"
                            >
                                
                            </Input>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={props.createCommunityHandleClick}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}