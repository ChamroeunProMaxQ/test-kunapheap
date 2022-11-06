import React from 'react'
import chamroeun from '../assets/chamroeun.jpg'
import daranyjs from '../assets/daranyjs.jpg'
import ratha from '../assets/ratha.jpg'
function Team() {
  return (
    <div>
        <h2>168 Team Member</h2>
        <p>Chamroeun</p>
        <img src={chamroeun} style={{width:"200px"}} />
        <p>Darany</p>
        <img src={daranyjs} style={{width:"200px"}} />
        <p>Ratha</p>
        <img src={ratha} style={{width:"200px"}}/>
    </div>
  )
}

export default Team