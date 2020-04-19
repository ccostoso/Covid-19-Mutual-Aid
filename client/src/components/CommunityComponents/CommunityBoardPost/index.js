import React, { Component } from "react";
import { Row } from "../../UniversalComponents/Grid";
import { CreateReplyModal } from "../CreateThreadModal";
import { CommunityBoardPostReply } from "../CommunityBoardPostReply";
import API from "../../../utils/API";

class CommunityBoardPost extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        createReply: {
            author: "",
            body: "",
            community: this.props.communityTitle,
            parentThread: this.props.thread._id,
        }
    }

    createReplyHandleChange = e => {
        console.log(this.state.createReply.parentThread);
        const { name, value } = e.target;

        let oldCreateReply = this.state.createReply;
        oldCreateReply[name] = value;

        this.setState({
            createReply: oldCreateReply,
        })
    }

    createReplyHandleClick = e => {
        e.preventDefault();

        const newReply = this.state.createReply;

        API.createReply(newReply);

        this.setState({
            createReply: {
                author: "",
                body: "",
                community: this.props.communityTitle,
                parentThread: this.props.thread._id
            }
        })
    }
    
    render() {
        console.log("COMMUNITY BOARD POST PROPS", this.props)
        const replies = this.props.thread["replyObjectsArray"];
    
        // console.log(this.state.createReply);

        return (
            <div className="card mb-4">
                <div className="card-header">
                    <div><strong>{this.props.thread.title}</strong> by {this.props.thread.authorName}</div>
                </div>
                <div className="card-body">{this.props.thread.body}</div>
                <ul className="list-group list-group-flush">
                    {replies && replies.map(reply => {
                        return <CommunityBoardPostReply 
                            reply={reply}
                            key={reply._id} 
                        />
                    })}
                    <li className="list-group-item d-flex p-1">
                        <CreateReplyModal
                            author={this.state.createReply.author}
                            body={this.state.createReply.body}
                            community={this.state.createReply.community}
                            title={this.props.thread.title}
                            createReplyHandleChange={this.createReplyHandleChange}
                            createReplyHandleClick={this.createReplyHandleClick}
                            parentThread={this.state.createReply.parentThread}
                        />
                    </li>
                </ul>
            </div>
        )
    }
};

export default CommunityBoardPost;