import React from "react";


class Synopsis extends React.Component {
	render () {
		//console.log(this.props.dataSynopsis);

		const { id, poster, altText, title, subTitle, synopsisText } = this.props.dataSynopsis;	
		
		//console.log(id, poster, altText);

		return (
		    <div className="synopsis" id={id}>
		        <div className="synopsisHeader">
		            <div className="cover">
		                <img src={poster} alt={altText} />
		            </div>
		            <div className="synopsisTitle">
		                <h1><img src={title} alt="Star Wars: The Mandalorian" /></h1>
		            </div>
		        </div>
		        <div className="synopsisText">
		            <h2>{subTitle}</h2>
		            <p dangerouslySetInnerHTML={ { __html: synopsisText } }></p>
		        </div>
		    </div>
		)
	}
}

export default Synopsis;


	    // <div className="synopsis" id={this.props.id}>
	    //     <div className="synopsisHeader">
	    //         <div className="cover">
	    //             <img src="{this.props.poster}" alt="{this.props.altText}" />
	    //         </div>
	    //         <div className="synopsisTitle">
	    //             <h1><img src="{this.props.title}" alt="Star Wars: The Mandalorian" /></h1>
	    //         </div>
	    //     </div>
	    //     <div className="synopsisText">
	    //         <h2>{this.props.subTitle}</h2>
	    //         <p>{this.props.synopsisText}</p>
	    //     </div>
	    // </div>

