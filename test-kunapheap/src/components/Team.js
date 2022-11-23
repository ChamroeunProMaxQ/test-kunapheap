import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import chamroeun from '../assets/chamroeun.jpg'
import daranyjs from '../assets/daranyjs.jpg'
import ratha from '../assets/ratha.jpg'

function Team() {

  const url = 'https://api-kunapheap.herokuapp.com/api/students/'

  const [data, setData] = useState('');

  useEffect( ()=> {

    const dataFetch = async () => {
      
      const res = await fetch(url)
      const data = await res.json()

      console.log(data)

      // set state when the data received

    };

    dataFetch();
  },[])

  return (
    <div>
        <h2>168 Team Member</h2>
        {/* <p>Chamroeun</p> */}
        <h1>{data}</h1>
        <img src={chamroeun} style={{width:"200px"}} />
        <p>Darany</p>
        <img src={daranyjs} style={{width:"200px"}} />
        <p>Ratha</p>
        <img src={ratha} style={{width:"200px"}}/>
    </div>
  )
}

export default Team