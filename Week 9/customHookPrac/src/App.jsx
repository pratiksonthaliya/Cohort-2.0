/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import axios from 'axios'

///////// Performance/Timer Based

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  
  useEffect(()=>{
    const timerId = setTimeout(()=>{
      setDebouncedValue(value);
    }, delay)

    return () => clearTimeout(timerId)
  }, [value, delay])

  return debouncedValue
}

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect
  useEffect(()=>{
    fetch("")
  }, [debouncedValue])

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
      {debouncedValue}
    </>
  );
};


// function useInterval(fn, timeout){
//   useEffect(()=>{
//     const val = setInterval(()=>{
//       fn()
//     }, timeout)

//     return ()=>{
//       clearInterval(val)
//     }
//   }, [])
// }

// function App() {
//   const [count, setCount] = useState(0);

//   // const val = setInterval(() => {
//   //   clearInterval(val)
//   //   setCount(c => c + 1);
//   // }, 1000)

//   useInterval(()=>{
//     setCount(c => c + 1)
//   }, 1000)

//   return (
//     <>
//       Timer is at {count}
//     </>
//   )
// }



///////// Browser Functionality Related Hooks


// function useIsOnline() {
//   const [isOnline, setIsOnline] = useState(window.navigator.onLine);

//   useEffect(()=>{
//     window.addEventListener('online', ()=>{
//       setIsOnline(true);
//     })
//     window.addEventListener('offline', ()=>{
//       setIsOnline(false);
//     })
//   }, [])

//   return isOnline
// }

// function useMouseMove() {
//   const [position, setPosition] = useState({x: 0, y: 0});
  
//   const handleMouseMove = (e) => {
//     setPosition({x: e.clientX, y: e.clientY})
//   }

//   useEffect(()=>{
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove)
//     }
//   }, [])

//   return position
// }

// const App = () => {
//   const isOnline = useIsOnline();

//   const mousePointer = useMouseMove();

//   return <div>
//     Your mouse pointer is {mousePointer.x} : {mousePointer.y}
//   </div>

//   // if(isOnline) {
//   //   return "You are online yay.."
//   // }

//   // return "You are offline, please connect to Internet"
// }





////////   Data Fetching Hooks


// function useTodos (n) {
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const value = setInterval(() => {
//       axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading(false)
//       })  
//     }, n * 1000)

//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading(false)
//       })  

//       return () =>{
//         clearInterval(value)
//       }
//   }, [n])

//   return {todos, loading}
// }

// function App() {
//   const {todos, loading} = useTodos(5)

//   return (
//     <>
//       {loading ? "Loading..." : todos.map(todo => <Track key={todo} todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

export default App