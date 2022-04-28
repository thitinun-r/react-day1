import { useState } from 'react'
import Users from './users'


function Workshop() {
  
    const callback = (message) => {
        console.log("Call Back messahe"+message)
    }
  return (
    <div>
      <h2>Workshop Component</h2>
      <Users />
    </div>
  )
}

export default Workshop
