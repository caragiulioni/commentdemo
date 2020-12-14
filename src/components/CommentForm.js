import React from "react";

let select = "";

class CommentForm extends React.Component {

		getSelect = (event) =>{
			this.avatar = event.target.value;
			console.log(this.avatar);
		};

		nameRef = React.createRef();
		commentRef = React.createRef();

		createComment = event => {
			//1. stop empty form from submitting
			event.preventDefault();

			//console.log("COMMENT DATA", this.nameRef.current.value, this.commentRef.current.value, "this is the buggy selection", this.labelRef.current.value)

			//console.log(this.props.dataAvatars);

			const data = this.props.dataAvatars;

						
			//2. Get the values
			const comment= {
				name: this.nameRef.current.value,
				comment: this.commentRef.current.value,
				value: this.avatar,
				key: Date.now(),
			}

			//console.log(comment);
			//console.log("this is the buggy selection", comment.label);
			this.props.addComment(comment);
			//refresh the form
			//console.log(event.currentTarget);
			event.currentTarget.reset();
		}


	render () {
		//console.log(this.props.dataAvatars)

		const data = (this.props.dataAvatars)
		//console.log("data", data);

		return (
				<form className="commentForm" onSubmit={this.createComment}>
					<input required name="name" ref={this.nameRef} autoFocus type="text" aria-label="Tell us your name" placeholder="Tell us your name" className="nameInput" />
				 	<textarea required name="comment" ref={this.commentRef} autoFocus type="text" aria-label="Leave us a comment" placeholder="Leave us a comment!" className="commentInput"></textarea>
				  	<select name="option" required onChange={this.getSelect} defaultValue="" className="formSelect" id="select">
				  		<option value="" disabled>Pick an avatar!</option>
				  		{data.map((item) => 
				  			<option name="avatar" value={item.value} key={item.value}>{item.label}</option>
				  		)};
				  	</select>
		  			<button type="submit">Submit</button>
				</form>
		)
	}
}

export default CommentForm;


