import { useState, useEffect, useMemo } from 'react'

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

// const App = () => {
//   const [todos, setTodos] = useState([])
//   const [flag, setFlag] = useState(true)

//   useEffect(() => {
//     setInterval(() => {
//       fetch("https://sum-server.100xdevs.com/todos")
//       .then(async (res) => {
//         const json = await res.json();
//         setTodos(json.todos)
//       })
//     }, 5000)
//   }, [flag])

//   return (
//     <div>
//       <div>
//         {todos.map(todo => {
//           return <div key ={todo.id}>
//             <h2>{todo.title}</h2>
//             <h3>{todo.description}</h3>
//           </div>
//         })}
//       </div>
//       <button onClick={()=>setFlag(!flag)}>Fetch New Todo</button>
//     </div>  
//   )
// }

// export default App



// // Side effects -> In react, the concept of side effects encompress any operations that reach outside
// the functional component scope of a React Component. These operations can affect other components, 
// interact withe browser, or perform asynchronous data fetching
// like -> setTimeout, fetch, setInterval, async task,
//          documnet.getElementById("").innerHTML = ""

// // Hooks -> new feature introduced in React 16.8 that allows you to use state and other React features
// without writing a class. Hooks allow function components to have access to state and other React features. 
// Because of this, class components are generally no longer needed.


// function App() {
//   const [selectedId, setSelectedId] = useState(1);

//   return <div>
//     <button id={1} onClick={()=> setSelectedId(1)}>1</button>
//     <button id={2} onClick={()=> setSelectedId(2)}>2</button>
//     <button id={3} onClick={()=> setSelectedId(3)}>3</button>
//     <Todo id={selectedId}/>
//   </div>
// }

// function Todo({id}) {
//   const [todo, setTodo] = useState({});

//   useEffect(()=>{
//     fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
//     .then(async (res)=>{
//       const json = await res.json();
//       setTodo(json.todo)
//       console.log(json.todo);
//     })
//   }, [id])

//   return <div>
//     <h2>
//       {todo.title}
//     </h2>
//     <h4>
//       {todo.description}
//     </h4>
//   </div>
// }

// export default App;

const App = () => {
  const [count, setCounter] = useState(0);
  const [number, setNumber] = useState(0);
  const [sum, setSum] = useState(0);

  const Sum = useMemo(()=>{
    let res=0;
    for(let i=1; i<=number; i++){
      res+=i;
    }
    return res;
  }, [number]) 

  useEffect(()=>{
    let res=0;
    for(let i=1; i<=number; i++){
      res+=i;
    }
    setSum(res);
  }, [number])

  return(
    <div>
      <input onChange={(event) => 
       setNumber(Number(event.target.value))
       } placeholder={"Find sum from 1 to N"}></input>
      <h2>Sum is {Sum}</h2>
      <h2>Sum is {sum}</h2>
      <button onClick={()=>setCounter(count+1)}> Counter {count}</button>
    </div>
  )
}

export default App