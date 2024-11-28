import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
    const Navigate = useNavigate()

    const BackPage =()=>{
      Navigate('/')
    }
  return (
    <div className=" w-full h-screen bg-white flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl text-black font-semibold">404</h2>
        <p className="text-2xl text-black ">Page not Found</p>
        <button onClick={BackPage} className="bg-Aqua mt-2 py-3 px-[25px] rounded-lg text-dark_teal ">Go Back</button>
      </div>
    </div>
  )
}

export default Error