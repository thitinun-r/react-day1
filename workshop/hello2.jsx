import { useState } from 'react'



const Name = ({value,onCall}) => {
  return (
    <div>
      Name : <input type="text"  value={value}  onChange={onCall}  />
    </div>
  )
}

const Age = ({value,onCall}) => {
  return (
    <div>
      Age : <input type="text" name="age" value={value}  onChange={onCall} />
    </div>
  )
}

const Show = ({name,age}) => {
  return (
    <div>
     <br /><label>{name ? <b>Hi,{name} With age = {age}</b> : "please enter name and age"}</label>   
    </div>
  )
}

function Hello2({onCall}) {



    console.log("Rendered")
    

    const [name,updateName] = useState("default name")
    const [age,updateAge] = useState("0")

  return (
    <div>
     <Name  name={name} onCall = { (event) => updateName(event.target.value) }  />
     <Age   age={age}  onCall = { (event) => updateAge(event.target.value) } />  
     <Show name={name} age={age} />       
    </div>
  )
}

export default Hello2
