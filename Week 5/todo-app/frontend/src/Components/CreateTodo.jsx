import { useState } from "react";

export function CreateTodo() {
    // react query
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    return(
        <div>
            <input type="text" placeholder="title" onChange={(e)=>{
                const value = e.target.value;
                setTitle(value)
            }}></input><br/>
            <input type="text" placeholder="description" onChange={(e)=>{
                const value = e.target.value;
                setDescription(value)
            }}></input><br/>

            <button onClick={() =>{
                        // axios
                        fetch("http://localhost:3000/todos", {
                            method: "POST",
                            body: JSON.stringify({
                                title: title,
                                description: description
                            }),
                            headers: {
                                "Content-type" : "application/json"
                            }
                        }).then(async function(res){
                            const json = await res.json();
                            alert(json)
                        })}}>
                            
                        Add a Todo</button>
                            </div>
                        )
                    }

// const onClickHandler = () =>{
//     // axios
//     fetch("http://localhost:3000/todos", {
//         method: "POST",
//         body: JSON.stringify({
//             title: title,
//             description: description
//         }),
//         headers: {
//             "Content-type" : "application/json"
//         }
//     }).then(async function(res){
//         const json = await res.json();
//         alert(json)
//     })
        
// }