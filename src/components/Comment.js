import React from "react";


class Comment extends React.Component {
	render () {
		//console.log("FROM COMMENT COMPONENT", this.props.commentState);
		//console.log(this.props.comments);
		//const comments = this.props.commentState;
		//console.log("WILL RENDER", comments);
		//console.log(this.props.commentState)


		const { name, comment, value, key} = this.props.commentState;
			
		//console.log(name, label, comment, key)

		//console.log(key);
		
		let getDate = new Date(key);

		const date = getDate.toDateString();

		const time = getDate.toLocaleTimeString();

		const dateTime = date+' at '+time;

		//console.log(dateTime);

		return (
					<li key={key} className="">
						<div className="commentDetails">
		  	      			<img src={value} aria-hidden="true" />
			  				<div className="userDetails">
				 				<h4>{name}</h4>
				 				<p>Posted at: {dateTime}.</p>
			  				</div>
			 			</div>
		  				<div className="userComment">
							<div className="comment"><p>{comment}</p></div>
						</div>
					</li>

		)
	}
}

export default Comment;


