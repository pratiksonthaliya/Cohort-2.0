
import { RevenueCard } from './components/RevenueCard';
function App() {

  return (
    <>
      <div className='grid grid-cols-4'>

        <RevenueCard title= {"Amount Pending"} amount={"92,312.20"} orderCount={'13'}/>


        {/* <div style={{display: 'flex', justifyContent: "space-around"}}>
          <p style={{background: 'orange'}}>hello</p>
          <p style={{background: 'white', color: 'blue'}}>hello</p>
          <p style={{background: 'green'}}>hello</p>
        </div>
        <br/>
        <div className="flex justify-between">
          <p className="bg-orange-500">hello</p>
          <p className="bg-white-500">hello</p>
          <p className="bg-green-500">hello</p>
        </div>
        <br/>
        <div className="grid grid-cols-3">
          <p className="bg-orange-500">hello</p>
          <p className="bg-blue-500">hello</p>
          <p className="bg-green-500">hello</p>
          <p className="bg-purple-500">hello</p>
          <p className="bg-gray-500">hello</p>
          <p className="bg-pink-500">hello</p>
        </div>
        <br/>
        <div className="grid grid-cols-10">
          <p className="bg-orange-500 col-span-4">hello</p>
          <p className="bg-blue-500 col-span-4">hello</p>
          <p className="bg-green-500 col-span-2">hello</p>
          <p className="bg-purple-500 col-span-2">hello</p>
          <p className="bg-gray-500 col-span-4">hello</p>
          <p className="bg-pink-500 col-span-4">hello</p>
        </div>
        <br/>
        <div className="flex ">
          <p className="bg-orange-500 w-[30%]">hello</p>
          <p className="bg-blue-500 w-[30%]">hello</p>
          <p className="bg-green-500 w-[40%]">hello</p>
        </div>
        <br />
        <div className="bg-red-500 md:bg-blue-500">
          hi there
        </div>
        <br />
        <div className="md:grid grid-cols-3">
          <p className="bg-orange-500">hello</p>
          <p className="bg-blue-500">hello</p>
          <p className="bg-green-500">hello</p>
        </div> */}
      </div>
    </>
  )
}

export default App
