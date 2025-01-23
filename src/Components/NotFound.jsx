import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
   <div className="h-screen w-screen  bg-slate-700 flex justify-center items-center">
     <div className="text-center text-slate-100 text-xl">
      404 - No Such Page Found : Go back to <Link to="/" className="text-emerald-300">Home</Link>
    </div>
   </div>
   
  )
}

export default NotFound
