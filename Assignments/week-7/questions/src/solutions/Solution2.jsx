/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

// import { memo, useRef } from "react";

// export const Solution2 = () => {
//     const colors = ['Red', 'Yellow', 'Black', 'Purple', 'Green', 'Blue', 'Default'];
//     const bodyRef = useRef(null)
//     return (
//         <div ref={bodyRef}>
//             {colors.map((color)=>{
//                 if(color === "Default") color = 'white';
//                 return <Button key={color} color={color} bodyRef={bodyRef}/>
//             })}
            

//         </div>
//     )
// }

// const Button = memo(({color, bodyRef})=>{
//     const changeBackgroundColor = () => {
//         console.log(bodyRef);
//         bodyRef.current.style.backgroundColor = color;
//     }
//     return (
//         <button style={{backgroundColor: color, color: "grey"}} onClick={changeBackgroundColor}>{color}</button>
//     )
// })












import { memo } from "react";

export const Solution2 = () => {
    const colors = ['Red', 'Yellow', 'Black', 'Purple', 'Green', 'Blue', 'Default'];

    return (
        <div>
            {colors.map((color)=>{
                if(color === "Default") color = 'white';
                return <Button key={color} color={color}/>
            })}
            

        </div>
    )
}

const Button = memo(({color})=>{
    const changeBackgroundColor = () => {
        document.body.style.backgroundColor = color;
    }
    return (
        <button style={{backgroundColor: color, color: "grey"}} onClick={changeBackgroundColor}>{color}</button>
    )
})

