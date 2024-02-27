// import { useMemo } from 'react';
import countAtom, { evenSelector } from './store/atoms/count';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

function App() {  
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  )
}

function Count() {
  console.log('re-render');
  return <div>
    <CountRenderer  />
    <Buttons />
    <EvenCountRender/>
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return <div>
    {count}
  </div>
}

function Buttons() {
    // to avoid button re-render
  const setCount = useSetRecoilState(countAtom) 
  console.log('button re-render');
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>
    <br/>
    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>

  // const [count, setCount] = useRecoilState(countAtom)
  // return <div>
  //   <button onClick={() => {
  //     setCount(count + 1)
  //   }}>Increase</button>
  //   <br/>
  //   <button onClick={() => {
  //     setCount(count - 1)
  //   }}>Decrease</button>
  // </div>
  // }
}

// const EvenCountRender = () => {
//   // depends on count -> rerender only if count changes
//   const count = useRecoilValue(countAtom);
//   const isEven = useMemo(()=>{
//     return count%2 == 0;
//   }, [count])
//   return (<div>
//     {isEven ? "It is Even" : null}
//   </div>
//   )
// }

const EvenCountRender = () => {
  // something derived from a state
  const isEven = useRecoilValue(evenSelector);
  return (<div>
    {isEven ? "It is Even" : null}
  </div>
  )
}

export default App
