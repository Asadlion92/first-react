import React from 'react'
import './Hello.css'

function Hello({user}) {
  return (
    <div className='hello-container'>
        <h2>Hello {user.name}</h2>
        <p>Location: {user.country}</p>
        <p>Your favorite color is {user.color}</p>
    </div>
  )
}

export default Hello