import { useState } from "react"

export const Solution4 = () => {
    const [number, setNumber] = useState(null)
    const [para, setPara] = useState(null)
    const randomWords = [
        "Elephant",
        "Sunshine",
        "Adventure",
        "Butterfly",
        "Harmony",
        "Radiant",
        "Serendipity",
        "Whimsical",
        "Tranquility",
        "Enchantment"
      ];

    function generatePara(){
        let paragraph = "";
        let len = number;
        while(len--){
            paragraph = paragraph + randomWords[Math.floor(Math.random()*10)] + " ";
        }
        setPara(paragraph)
    }

    return (
        <div>
            <h1>Para Generator</h1>
            <input type="text" onChange={(e) => setNumber(e.target.value)} value={number} placeholder="Enter Number of Words"/> 
            <button onClick={generatePara}>Generate</button>
            {para && <p>{para}</p>}
        </div>
    )
}