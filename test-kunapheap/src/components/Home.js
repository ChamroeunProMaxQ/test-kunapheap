import React from 'react'
import "../App.css"
import {Link } from 'react-router-dom'
import logo from "../assets/shopingcart.gif";

function Home() {
  return (
    <div>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="line">____________________________________</div>
          <p className="under-text">Kunapheap Store Coming Soon ....</p>
          <h3>Developing By </h3>
          <Link to="/team" ><h1 className='no-margin'>Team 168 </h1></Link>
        </header>
      </div>
    </div>
  )
}

export default Home