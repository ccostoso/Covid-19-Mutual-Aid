import React from "react";
import { Input, TextArea, FormBtn } from "../../UniversalComponents/Form";

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
                            <h5 className="modal-title" id="exampleModalLabel">Create a New Thread</h5>
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
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={props.createThreadHandleClick}>Create Thread</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const CreateReplyModal = props => {
    return (
        <section className="ml-auto">
            {/* // < !--Button trigger modal-- > */}
            <button type="button" className="btn btn-sm btn-primary ml-auto" data-toggle="modal" data-target="#replyModal">
                Reply
            </button>

            {/* // <!--Modal --> */}
            <div className="modal fade" id="replyModal" tabIndex="-1" role="dialog" aria-labelledby="replyModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="replyModalLabel">Reply</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Response Title:
                            <Input
                                name="title"
                                value={`Re: ${props.thread.title}`}
                                onChange={props.createReplyHandleChange}
                                placeholder={`Re: ${props.thread.title}`}
                            >

                            </Input>
                            Thread Author:
                            <Input
                                name="author"
                                value={props.createReply.author}
                                onChange={props.createReplyHandleChange}
                                placeholder="Thread Author"
                            >

                            </Input>
                            Response Body:
                            <TextArea
                                name="body"
                                value={props.createReply.body}
                                onChange={props.createReplyHandleChange}
                                placeholder="Message Body"
                            >

                            </TextArea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <FormBtn
                                type="button"
                                className="btn btn-primary"
                                data-dismiss="modal"
                                onClick={props.createReplyHandleClick}
                                key={props.thread._id}
                                id={props.thread._id}
                                title={props.thread.title}
                            >
                                Reply
                            </FormBtn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}