import {memo} from 'react';

// Prop drilling in React is the process of passing props from a parent component 
// to a child component, and then to another child component, and so on, until the prop 
// reaches the component that needs it. This can be a problem because it can make the code 
// difficult to read and maintain.


// If you use the context api, you’re pushing your state management outside the core react components


import { createContext, useContext, useState } from "react"

const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <CountContext.Provider value={{count, setCount}}>
      <Count />
    </CountContext.Provider>
  )
}

function Count() {
  return <div>
    <CountRenderer  />
    <Buttons />
  </div>
}

function CountRenderer() {
  const {count} = useContext(CountContext)
  return <div>
    {count}
  </div>
}

const Buttons = memo(function Button() {
  const {count, setCount} = useContext(CountContext)
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>
    <br/>
    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
})



// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
// import Landing from './pages/Landing'
// import { Suspense } from 'react';
// const  Dashboard = React.lazy(() => import('./pages/Dashboard')); //lazy loading

// // suspense api -> async component, data, fetching 

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Appbar/>
//         <br/>
//         <Routes>
//           <Route path='/'element={<Suspense fallback='...loading' ><Landing/></Suspense>}/>
//           <Route path='/dashboard' element={<Suspense fallback='...loading' ><Dashboard/></Suspense>} />
//         </Routes>
//       </BrowserRouter> 
//     </>
//   )
// }

// const Appbar = () => {
//   const navigate = useNavigate();
//   return(
//     <div>
//       <p>This is the top bar</p>
//       <button onClick={()=>{
//         navigate('/dashboard')
//       }} >Dashboard Page</button>
//       <button onClick={()=>{
//         navigate('/')
//       }} >Home Page</button>
//     </div>
//   )
// }

// function App() {

//   return (
//     <>
//       <div style={{background: "blue"}}>
//         This is the top bar
//          <button onClick={()=>{
//           window.location.href = '/dashboard'
//          }} >Dashboard Page</button>
//          <button onClick={()=>{
//           window.location.href = '/'
//          }} >Home Page</button>
//       </div>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/'element={<Landing/>}/>
//           <Route path='/dashboard' element={<Dashboard/>} />
//         </Routes>
//       </BrowserRouter> 
//     </>
//   )
// }

export default App
