import React from 'react'
import "../App.css"
import {Link } from 'react-router-dom'
import logo from "../assets/kunapheaplogo.svg";

function Home() {
  return (
    <div>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="under-text" style={{fontWeight: 'bolder'}}>Kunapheap is Quality Coming Soon ..</p>
          <h3 style={{color: "black"}}>Developing By </h3>
          <Link to="/team" ><h1 className='no-margin' style={{color: "#7DBE7C", textDecoration: 'none'}}>Team 168 </h1></Link>
        </header>
      </div>
    </div>
  )
}

export default Home