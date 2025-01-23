import React from 'react'
import bg from '../assets/bg1.jpeg'
import arrowDown from '../assets/arrow_down.svg'
import NavBar from './NavBar'
import {Books} from '../Utilities/booksData'
import BookCard from './BookCard'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="max-w-screen h-fit border-2 bg-slate-100 flex flex-col items-center gap-4 box-border">

     {/* nav, bg-image */}
     <div className="w-11/12 bg-cover bg-right-top rounded-md mt-4 p-2" style={{ height: 500 ,backgroundImage: `url(${bg})`}}>
     <NavBar/>
     
     <div className="mt-32 ml-10 flex flex-col gap-2">
      <h2 className="text-4xl font-serif">Welcome! <br />Find the book <br /> you're looking for, <br /> easier to read.</h2>
      <p className=""> The most appropriate site to discover your next great read.</p>
     </div>
    </div>

    {/* Categories */}
    <div className="text-2xl md:text-3xl lg:text-4xl mt-16 mb-4 ">
      Explore Categories
    </div>
    
    <ul className='mt-2 ml-16 font-serif max-w-fit flex gap-5 '>
        <li  className='bg-emerald-100 text-lg'><Link to='/books/Sci-Fi'>Sci-Fi</Link></li>
        <li  className='bg-emerald-100 text-lg'><Link to='/books/Fiction'>Fiction</Link></li>
        <li  className='bg-emerald-100 text-lg'><Link to='/books/Classic'>Classic</Link></li>
        <li  className='bg-emerald-100 text-lg'><Link to='/books/Adventure'>Adventure</Link></li>
        <li  className='bg-emerald-100 text-lg'><Link to='/books/Mythology'>Mythology</Link></li>
        <li  className='bg-emerald-100 text-lg'><Link to='/books/Philosophical'>Philosophical</Link></li>
        <li  className='bg-emerald-100 text-lg'><Link to='/books/Romance'>Romance</Link></li>
        <li  className='bg-emerald-100 text-lg'><Link to='/books/Poetry'>Poetry</Link></li>
        <li  className='bg-emerald-100 text-lg'><Link to='/books/Dystopian'>Dystopian</Link></li>
      </ul>

    {/* popular books card */}
    <div className=" w-11/12 mt-16 mb-4"> 
    <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Popular Now</h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1"> 
      {Books.filter((book) => [1, 2, 3, 4,5].includes(book.id)).map((book) => ( <BookCard key={book.id} id={book.id} src={book.cover_image} title={book.title} author={book.author} /> ))} 
      </div> 
      </div>

      <Footer/>

    </div>
  )
}

export default Home
