import { useState, useEffect } from 'react'

// // Hooks -->>
// These functions that start with use are called hooks
// Hooks in React are functions that allow you to "hook 
// into" React state and lifecycle features from function components

// useState,
// useEffect, 
// useMemo, 
// useCallback, 
// useRef, 
// useReducer
// useContext
// useLayoutEffect


// Fetch on every button click or it will re render every 5 sec
function App() {
  const [todos, setTodos] = useState([])
  const [flag, setFlag] = useState(true)

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos)
      })
    }, 5000)
  }, [flag])

  return (
    <div>
      <div>
        {todos.map(todo => {
          return <div key ={todo.id}>
            <h2>{todo.title}</h2>
            <h3>{todo.description}</h3>
          </div>
        })}
      </div>
      <button onClick={()=>setFlag(!flag)}>Fetch New Todo</button>
    </div>  
  )
}

export default App
