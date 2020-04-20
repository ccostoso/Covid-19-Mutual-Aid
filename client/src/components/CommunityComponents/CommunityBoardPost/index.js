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
            author: this.props.userEmail,
            body: "",
            community: this.props.communityTitle,
            parentThread: this.props.thread._id,
        },
        replyObjects: [],
    }

    componentDidMount() {
        this.getReplies(this.props.thread._id);
    }

    createReplyHandleChange = e => {
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

    handleDeleteClick = e => {
        e.preventDefault();

        const { value } = e.target;

        API.deleteThread(value);
    }

    getReplies = async theadId => {
        const response = await API.getReplies(theadId);

        this.setState({
            replyObjects: response.data,
        })
    }
    
    render() {
        return (
            <div className="card mb-4">
                <div className="card-header">
                    <div><strong>{this.props.thread.title}</strong> by {this.props.thread.authorName}</div>
                </div>
                <div className="card-body">{this.props.thread.body}</div>
                <ul className="list-group list-group-flush">
                    {this.state.replyObjects ? this.state.replyObjects.map(reply => {
                        return <CommunityBoardPostReply 
                            reply={reply}
                            key={reply._id} 
                        />
                    }) : <div></div>}
                    <li className="list-group-item d-flex justify-content-between p-1">
                        {this.props.thread.author === this.props.userId && <button 
                            className="btn btn-danger btn-sm"
                            onClick={this.handleDeleteClick}
                            value={this.props.thread._id}
                        >
                            Delete</button>}
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