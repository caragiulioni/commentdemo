import React from "react";
import { FaThumbsUp } from 'react-icons/fa';


class Likes extends React.Component {
	render () {
		//console.log("From COMMENT RENDER", this.props.commentState);

		console.log(this.props.likesState);
		return (
		    <section className="likes">
		        <h3>Like this article!</h3>
      			<div className="likeFunction">
	      			<button type="button" onClick={this.props.likesIncrement}><FaThumbsUp className="thumb" aria-hidden="true" /></button>
	        		<p><span>{this.props.likesState} </span> members of the Jedi Order have used The Force!</p>
        		</div>
		    </section>
		)
	}
}

export default Likes;

