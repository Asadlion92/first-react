import React, { useState } from 'react'
import './Welcome.css'

function Welcome() {

    //create a state to hold the user input
    const [yourname, setYourname] = useState('')
    const [message, setMessage] = useState('')

    const handleInput = (e) => {
        console.log('typing', e.target.value)

        //e.target.vaue has the user input in textbox
        //store user Input into state
        setYourname(e.target.value)
    }

    const sayHello = () => {
        console.log('Hello')

        //generate output message
        setMessage(`Hello ${yourname}! How are you today?`)

        //clear the textbox
        setYourname('')
    }

  return (
    <div>
        <input type='text' value={yourname} 
        // onChange={handleInput}
        onChange={(e)=>setYourname(e.target.value)}
        placeholder='enter your name' />
        <button onClick={sayHello}>Say Hello</button>
        <button onClick={()=> setMessage('')}>Clear</button>
        <h3>{message}</h3>
    </div>
  )
}

export default Welcome