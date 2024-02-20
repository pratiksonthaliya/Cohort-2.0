import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to Gym",
      description: "Go to gym from 7-9pm",
      completed: false,
    },
    {
      title: "Study DSA",
      description: "Study DSA from 7-9pm",
      completed: false,
    },
    {
      title: "Study Web Dev",
      description: "Study Web Dev from 7-9pm",
      completed: false,
    }
  ])

  function addTodo() {
    setTodos([...todos, {
      title: "new todo",
      description:  "naya todo",
      completed: false,
    }])
  }

  return (
    <>
      <h1>Todos</h1> 
      <button onClick={addTodo}> Add Random Todo</button>
      {todos.map((todo) => <Todo title={todo.title} description={todo.description}></Todo>)}
    </>
  )
}

const Todo = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
    </>
  )
}

// const CustomButton = (props) => {
//   const onClickHandler = () => {
//     props.setCount(props.count+1)
//   }
//   return (
//     <div>
//       <button onClick={onClickHandler}>Counter {props.count}</button>
//     </div>
//   )
// }

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <CustomButton count={count} setCount={setCount}></CustomButton>
//     </>
//   )
// }

export default App

// Whenever a parent rerenders its child also rerenders