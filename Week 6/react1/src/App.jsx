/* eslint-disable react/prop-types */


import { useState } from "react"

function App2 () {
  return (
    <div style={{display: "flex"}}>
      <Card>
        hi there
      </Card>
      <Card>
        <div>
          hello from 2nd Card
        </div>
      </Card>
    </div>
  )
}

function Card ({childern}) {
  return(
    <div style={{
      border: "1px solid black",
      padding: 10,
      margin: 10
    }}>
      {childern}
    </div>
  )
}

let GLOBAL_ID = 4

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Need to hit the gym from 7-9PM"
  }, {
    title: "Go to Clas",
    description: "Need to go to the class from 4-7 PM"
  }, {
    title: "Eat foor",
    description: "Need to eat food from 2-4 PM"
  }])

  function addTodo() {
    setTodos([...todos, {
      id: GLOBAL_ID++,
      title: "New Todo",
      description: "new todo desc"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo, id) => {
      return <Todo key={id} title={todo.title} description={todo.description} />
       } )}
    </div>
  )
}

function Todo({title, description}) {
  return <div>
    <h2>
      {title}
    </h2>
    <h4>
      {description}
    </h4>
  </div>
}

export { App, App2}

// export default App


// import { useState } from "react"
// import { memo } from "react";

// const App = () => {
//   const [firstTitle, setFirstTitle] = useState("My name is Pratik");

//   function changeTitle() {
//     setFirstTitle("My name is " + Math.random())
//   }

//   return (
//     <div>
//       <button onClick={changeTitle}> Click me change the title</button>
//       <Header title={firstTitle}/>
//       <br/>
//       <Header title="My name is pratik"/>
//       <Header title="My name is pratik"/>
//       <Header title="My name is pratik"/>
//       <Header title="My name is pratik"/>
//     </div>
//   )
// }

// // rerender only if dynamic title is changed
// const Header = memo(function Header({title}){
//   return (
//     <div>
//       {title}
//     </div>
//   )
// })

// function App() {
//   return (
//     <div>
//       <HeaderWithButton/>
//       <Header title="My name is raman" />
//     </div>
//   )
// }
// const HeaderWithButton = () => {
//   const [firstTitle, setFirstTitle] = useState("my name is harkirat");

//   function changeTitle() {
//     setFirstTitle("My name is " + Math.random())
//   }

//   return (
//     <>
//      <button onClick={changeTitle}>Click me to change the title</button>
//      <Header title={firstTitle} />
//     </>
//   )
// } 
// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }

// export default App

// // Re-rendering in react

// A re-render means that  
  //  1. React did some work to calculate what all should update in this component 
  //  2. The component actually got called (you can put a log to confirm this) 
  //  3. The inspector shows you a bounding box around the component
// It happens when 
  //  1. A state variable that is being used inside a component changes 
  //  2. A parent component re-render triggers all children re-rendering
 
//  You want to minimise the number of re-renders to make a highly optimal react app 
// The more the components that are getting re-rendered, the worse  