import './styles/style.css'
import React, { useState, useEffect } from 'react';
import Items from './components/items.js'

function App() {

  const test1 = ()=> {
    console.log("works");
    document.getElementById("header").innerHTML = "hi"
  }

  return (
    <div>
      <div class="header" id="header">
        Memory game!
      </div>
      <Items imagelink="../images/noodle.png" name="noodle"/>
      <div className="lol" id="lol">
        <img src={require("./images/noodle.png")} alt="donut" height="300px" width="300px"/>
      </div>


    </div>
  );
}

export default App;
