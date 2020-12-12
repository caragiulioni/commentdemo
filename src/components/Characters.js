import React from "react";

class Characters extends React.Component {
	render () {
		//console.log(this.props.dataCharacters);
		const data = this.props.dataCharacters;

		return (
			<section className="characters">
				<h2>Characters</h2>
			    <div id="characters" className="charactersMain">
				    {data.map(item =>
				    	<div className="character" key={item.id} >
							<div className="characterImg"><img src={item.img} alt={item.altText} /></div>
							<div className="characterInfo">
								<h3>{item.character}</h3>
								<p dangerouslySetInnerHTML={ { __html: item.bio } }></p>
								<div className="readMore"><a href={item.url}>Read more...</a></div>
							</div>
						</div>
					)}
			    </div>
			</section>
		)
	}
}

export default Characters;
