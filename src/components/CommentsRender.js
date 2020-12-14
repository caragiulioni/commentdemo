import React from "react";
import Comment from "./Comment";


class CommentsRender extends React.Component {
	render () {
		//console.log("From COMMENT RENDER", this.props.commentState);
		return (
		    <section className="commentDisplay">
		    	<h3>Comments</h3>
		    		<ul>
					{Object.keys(this.props.commentState).sort((a,b) => a.index > b.index ? 1 : -1).map((key) =>
						<Comment key={key} commentState={this.props.commentState[key]} />
						)};
					</ul>
		    </section>
		)
	}
}

export default CommentsRender;

