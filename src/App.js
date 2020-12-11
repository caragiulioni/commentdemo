import React from "react";
import PropTypes from "prop-types";

import Header from "./components/Header.js";

import "./styles.css"
// import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <main>
          <h1>SECTION</h1>
        </main>
      </div>
    </div>
  );
}

export default App;
