import React from "react";
import Helmet from "react-helmet";

const MetaData = (props) => {
	return (
            <Helmet>
              <title>Comment App Demo</title>
				<meta name="description" content="Comment application utilizing state and local storage for visitor data."/>

				{/*<!-- Google / Search Engine Tags -->*/}
				<meta itemprop="name" content="Comment App Demo"/>
				<meta itemprop="description" content="Comment application utilizing state and local storage for visitor data."/>
				<meta itemprop="image" content="https://storage.googleapis.com/caraimgs/titleCard.png"/>
				{/*<!-- Facebook Meta Tags -->*/}
				<meta property="og:url" content="https://commentdemo.netlify.app"/>
				<meta property="og:type" content="website"/>
				<meta property="og:title" content="Comment App Demo"/>
				<meta property="og:description" content="Comment application utilizing state and local storage for visitor data."/>
				<meta property="og:image" content="https://storage.googleapis.com/caraimgs/titleCard.png"/>

				{/*<!-- Twitter Meta Tags -->*/}
				<meta name="twitter:card" content="summary_large_image"/>
				<meta name="twitter:title" content="Comment App Demo"/>
				<meta name="twitter:description" content="Comment application utilizing state and local storage for visitor data."/>
				<meta name="twitter:image" content="https://storage.googleapis.com/caraimgs/titleCard.png"/>
			</Helmet>
		)


};

export default MetaData;