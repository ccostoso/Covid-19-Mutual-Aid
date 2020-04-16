import React from "react";
import { Input, TextArea } from "../../UniversalComponents/Form";

export const CreateThreadModal = props => {
    return (
        <section className="ml-auto">
            {/* // < !--Button trigger modal-- > */}
            <button type="button" className="btn btn-sm btn-primary ml-auto" data-toggle="modal" data-target="#exampleModal">
                Create a New Thread
            </button>

            {/* // <!--Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create a New Community</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Thread Title:
                            <Input 
                                name="title" 
                                value={props.createThread.title}
                                onChange={props.createThreadHandleChange}
                                placeholder="Thread Title"
                            >
                                
                            </Input>
                            Thread Author:
                            <Input 
                                name="author" 
                                value={props.createThread.author}
                                onChange={props.createThreadHandleChange}
                                placeholder="Thread Author"
                            >
                                
                            </Input>
                            Message Body:
                            <TextArea 
                                name="body" 
                                value={props.createThread.body}
                                onChange={props.createThreadHandleChange}
                                placeholder="Message Body"
                            >
                                
                            </TextArea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={props.createThreadHandleClick}>Create Thread</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}