import { useState,useRef,useEffect } from 'react'




function Todo() {

  const [todos,setTodos] = useState([])
  const [activeRows,setActiveRows] = useState(0)
  const [totalRows,setTotalRows] = useState(0)
  const inputEl = useRef(null);


    const addTodo = (event) => {
      
      console.log(inputEl.current.value)
      const data = {
         "text": inputEl.current.value,
         "status" : true
      }
      setTodos([...todos, data])
      // setActiveRows((activeRows) => activeRows + 1)
      inputEl.current.value = ""
    }

    const toggleTodo = (event) => {
      console.log(event.target.id)
      const rowIndex = event.target.id
      // setTodos(todos)

      setTodos(existingItems => {
        let newArr = [...existingItems];
        if (newArr[rowIndex].status == true)  { 
          newArr[rowIndex] = {
              "text": existingItems[rowIndex].text,
              "status" : false
          }
          // setActiveRows((activeRows) => activeRows - 1)
        } else { 
          // setActiveRows((activeRows) => activeRows + 1)
          newArr[rowIndex] = {
              "text": existingItems[rowIndex].text,
              "status" : true
          }
        }
        return [...newArr]
      })
    }

    useEffect( () => {
      console.log("useEffect");
      let actives = 0
      todos.map(
        (todo) => {
           if (todo.status) {
            actives = actives + 1
           }
        }
      )
      setActiveRows(actives)
      setTotalRows(todos.length);
    },[todos])

  return (
    <div>
      <h2>Todos</h2>
      <input type="text" ref={inputEl}    /> 
      <button onClick={addTodo} >Add</button>
      <br/>
      <label>{activeRows} remaining out of {totalRows} task</label>
      <ul>
        {todos.map((todo,index) => <li  className={todo.status ? "null" : "unActive"}  onClick={toggleTodo} id={index}   key={index}>{todo.text}</li> )}
      </ul>
    </div>
  )
}

export default Todo
