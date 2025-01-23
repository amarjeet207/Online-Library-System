import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className=" flex items-center justify-evenly p-3  ">

     <Link to='/'>
     <h1 className=" text-2xl font-bold font-serif  cursor-pointer" >Books.com</h1>
     </Link>

     <ul className="flex items-center justify-center gap-6 text-lg font-serif text-slate-50 ">
      <li className="cursor-pointer"><NavLink to='/'>Home</NavLink></li>
      <li className="cursor-pointer"><NavLink to='/books'>Browse  Books</NavLink></li>
      <li className="cursor-pointer bg-emerald-800 p-1 pl-2 pr-2 rounded-xl text-sm"><NavLink to='/addBook'>Add Books</NavLink></li>
     </ul>
    </div>
  )
}

export default NavBar
