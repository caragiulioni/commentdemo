import React from "react";
import PropTypes from "prop-types";

import Header from "./components/Header.js";
import Synopsis from "./components/Synopsis.js";
import Characters from "./components/Characters.js";
import Comments from "./components/Comments.js";

import dataSynopsis from "./dataSynopsis.js";
import dataCharacters from "./dataCharacters.js";
import dataAvatars from "./dataAvatars.js";
import dataComments from "./dataComments.js";

import "./styles.css"
// import './App.css';



class App extends React.Component {

     
    state= {              
      comments:  JSON.parse(localStorage.getItem("stored")) || dataComments,
    };

     componentDidUpdate(){
        //console.log(this.state.comments);
        //console.log(dataComments);
        //console.log("component updating");

        let commentsSerialized = JSON.stringify(this.state.comments);
        //console.log("serialized", commentsSerialized);

        localStorage.setItem("stored", commentsSerialized);
        //console.log("local storage", localStorage);

        let commentsDeserialized = JSON.parse(localStorage.getItem("stored"));
        console.log("get stored items", commentsDeserialized); 

      };

    addComment = (comment) =>{

      //console.log("adding comment")

    // //SET STATE
    // //1. take a copy of the existing state NO MUTATIONS, we only modify copies data
    // //use a spread operator because its the cleaest, least verbose way
      const comments = {...this.state.comments};
    // //2. add out NEW fish to the copied state

     const key = Date.now();

      comments[key] = comment; //FISH comes via the FISH object relative to the addFishFrom  

      //console.log(key)

      // //3, Set the new fishes obect to state. in this case we want to update the state of fishes, add the new fishes and overright the previous state
        this.setState({
          comments: comments,
      });

     //console.log(comments);
    };

    
 
    render() {
     //console.log(this.state.comments);



      const commentState = (this.state.comments);

      //console.log(commentState);
        return (
              <div className="App">
                <Header />
                <div className="wrapper">
                  <main>
                    <Synopsis dataSynopsis={dataSynopsis} />
                    <Characters dataCharacters={dataCharacters} />
                    <Comments commentState={commentState} addComment={this.addComment} dataAvatars={dataAvatars} />
                  </main>
                </div>
              </div>  
        );
    }
}

export default App;


