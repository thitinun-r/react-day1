import { useState } from 'react'



function Hello({onCall}) {

    function handleName(event) {
        onCall(event.target.value)
        updateName(event.target.value)
    }
    const [name,updateName] = useState("")

  return (
    <div>
      Name : <input type="text" name="name" value={name}  onChange={handleName} />
      <br /><label>{name ? <b>Hi,{name}</b> : "please enter name"}</label>      
    </div>
  )
}

export default Hello
