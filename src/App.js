import React from "react";
import PropTypes from "prop-types";

import Header from "./components/Header.js";
import Synopsis from "./components/Synopsis.js";
import Characters from "./components/Characters.js";
import Comments from "./components/Comments.js";

import dataSynopsis from "./dataSynopsis.js";
import dataCharacters from "./dataCharacters.js";
import dataAvatars from "./dataAvatars.js";

import "./styles.css"
// import './App.css';



class App extends React.Component {


    addComment = (comment) =>{

      console.log("commenting")
    // //onsole.log("adding a fish from APP.js via props Inventory => addfishform!")
    // //SET STATE
    // //1. take a copy of the existing state NO MUTATIONS, we only modify copies data
    // //use a spread operator because its the cleaest, least verbose way
    // const fishes = {...this.state.fishes};
    // //2. add out NEW fish to the copied state
    // fishes[`fish${Date.now()}`] = fish; //FISH comes via the FISH object relative to the addFishFrom

    // //3, Set the new fishes obect to state. in this case we want to update the state of fishes, add the new fishes and overright the previous state
    // this.setState({
    //   fishes: fishes,
    // });
  };
 
    render() {

        return (
              <div className="App">
                <Header />
                <div className="wrapper">
                  <main>
                    <Synopsis dataSynopsis={dataSynopsis} />
                    <Characters dataCharacters={dataCharacters} />
                    <Comments addComment={this.addComment} dataAvatars={dataAvatars} />
                  </main>
                </div>
              </div>  
        );
    }
}

export default App;


