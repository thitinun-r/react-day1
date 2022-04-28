import { useEffect, useState } from 'react'
import axios from 'axios'



const UserLists = ({datas}) => {
    const listItems = datas.map((data) =>
    <li key={data.id}>
      {data.name}
    </li>
  );

    return (
        <ul>{listItems}</ul>
    )
  }


function Users({onCall}) {

    const [users,setUsers] = useState([])
    const [user,setUser] = useState([])
    const [counters,setCounters] = useState(1)
    useEffect( () => {
        console.log("useEffect");
        axios.get('https://jsonplaceholder.typicode.com/users/' + counters)
        .then(function (response) {
            // handle success
            
            console.log(response);
            setUser (response.data)
            // setUsers(response.data)
        })
    },[counters])

    useEffect( () => {
        console.log("useEffect");
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            // handle success
            setUsers(response.data)
        })
    },[])
   
  return (
    <div>
        <h3>Demo With API</h3>
        <button onClick={()=> setCounters(counters + 1)} >Get New User</button>
        <h4>{user.name}</h4>
        {/* {users.map(user => <li key={user.id}>{user.name}</li> )} */}
        <UserLists datas={users} />
    </div>
  )
}

export default Users
