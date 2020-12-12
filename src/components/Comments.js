import React from "react";
import CommentForm from "./CommentForm.js";

class Comments extends React.Component {
	render () {
		return (
		    <section>
				<h2>Comments</h2>
				<CommentForm addComment={this.props.addComment} dataAvatars={this.props.dataAvatars} />
		    </section>
		)
	}
}

export default Comments;
