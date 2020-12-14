import React from "react";
import CommentForm from "./CommentForm.js";
import CommentsRender from "./CommentsRender.js";

class Comments extends React.Component {
	render () {
		return (
		    <section>
				<h3>Add a Comment</h3>
				<CommentForm addComment={this.props.addComment} dataAvatars={this.props.dataAvatars} />
				<CommentsRender dataComments={this.props.dataComments} commentState={this.props.commentState} />
		    </section>
		)
	}
}

export default Comments;
