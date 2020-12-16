import React from "react";

import Header from "./components/Header.js";
import Synopsis from "./components/Synopsis.js";
import Characters from "./components/Characters.js";
import Comments from "./components/Comments.js";
import Likes from "./components/Likes.js";

import dataSynopsis from "./dataSynopsis.js";
import dataCharacters from "./dataCharacters.js";
import dataAvatars from "./dataAvatars.js";
import dataComments from "./dataComments.js";

import "./styles.css"
// import './App.css';



class App extends React.Component {

     
    state= {              
      comments:  JSON.parse(localStorage.getItem("commentDemoComments")) || dataComments,
      likes: JSON.parse(localStorage.getItem("commentDemoLikes")) || 12,
    };

     componentDidUpdate(){
        //console.log(this.state.comments);
        //console.log(dataComments);
        //console.log("component updating");


        //STORE COMMENTS
        let commentsSerialized = JSON.stringify(this.state.comments);
        //console.log("serialized", commentsSerialized);

        localStorage.setItem("commentDemoComments", commentsSerialized);
        //console.log("local storage", localStorage);

        let commentsDeserialized = JSON.parse(localStorage.getItem("commentDemoComments"));
        console.log("get stored items", commentsDeserialized); 


        //STORELIKES
        let likesSerialized = JSON.stringify(this.state.likes);
        localStorage.setItem("commentDemoLikes", likesSerialized);
        //let likesDeserialized = JSON.parse(localStorage.getItem("commentDemoLikes"));

      };

    addComment = (comment) =>{

      //console.log("adding comment")

    // //SET STATE
      const comments = {...this.state.comments};
      //2. add out item/comment to the copied state

     const key = Date.now();
     //give it a unique key

      comments[key] = comment;

      //console.log(key)

      // //3, Set the NEW comment obect to state.
        this.setState({
          comments: comments,
      });

     //console.log(comments);
    };

 
    render() {
     //console.log(this.state.comments);

      const commentState = (this.state.comments);

      const likesState = (this.state.likes);

      const likesIncrement = () =>{
        console.log("clicked");
        let newCount = this.state.likes+ 1
        this.setState({ likes: newCount})
        console.log(newCount)
      };

      //console.log(commentState);
      console.log(likesState);
        return (
              <div className="App">
                <Header />
                <div className="wrapper">
                  <main>
                    <Synopsis dataSynopsis={dataSynopsis} />
                    <Characters dataCharacters={dataCharacters} />
                    <Likes likesState={likesState} likesIncrement={likesIncrement} />
                    <Comments commentState={commentState} addComment={this.addComment} dataAvatars={dataAvatars} />
                  </main>
                </div>
              </div>  
        );
    }
}

export default App;


