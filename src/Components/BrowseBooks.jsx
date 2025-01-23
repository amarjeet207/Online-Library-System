import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import NavBar from "./NavBar";
import BookCard from "./BookCard";
import Search from '../assets/search.svg';
import close from '../assets/close.svg';

const BrowseBooks = () => {
  const books = useSelector(state => state.books);
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [inputValue, setInputValue] = useState('');
  const [filters, setFilters] = useState({
    'Sci-Fi': false,
    Fiction: false,
    Classic: false,
    Poetry: false,
    Adventure: false,
    Mythology: false,
    Philosophical: false,
    Romance: false,
    Dystopian: false,
  });

  useEffect(() => {
    let result = books;

    const activeFilters = Object.keys(filters).filter(key => filters[key]);
    if (activeFilters.length > 0) {
      result = result.filter(book => 
        activeFilters.includes(book.genre)
      );
    }

    if (inputValue) {
      result = result.filter(book => 
        book.title.toLowerCase().includes(inputValue.toLowerCase()) || 
        book.author.toLowerCase().includes(inputValue.toLowerCase())
      );
    }

    setFilteredBooks(result);
  }, [filters, inputValue]);
  

  const handleFilterChange = (filterKey) => {
    setFilters({ ...filters, [filterKey]: !filters[filterKey] });
  };

  const handleRemoveFilter = (filterKey) => {
    setFilters({ ...filters, [filterKey]: false });
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="max-w-screen h-fit flex flex-col m-4 mt-0 rounded-md gap-4 box-border">
      {/* Navbar */}
      <div className="bg-customGreen mb-16 p-3">
        <NavBar />
      </div>

      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-3 text-center">All Books</h2>

      {/* Filtered Buttons */}
      <div className="flex items-center justify-center pl-9 gap-7">

        {Object.keys(filters).map((filter) => (
          <span key={filter} className="p-1 pl-2 pr-2 rounded-md bg-buttonGreen text-slate-50 font-serif flex gap-1">
            <p onClick={() => handleFilterChange(filter)} className="cursor-pointer">{filter}</p>
            {filters[filter] && (
              <img src={close} onClick={() => handleRemoveFilter(filter)} id={filter} className="w-4 cursor-pointer" />
            )}
          </span>
        ))}

        {/* Search */}
        <span className="border border-slate-300 flex justify-center gap-1 p-1 pl-2 max-w-fit rounded-lg">
          <img src={Search} className="w-5 cursor-pointer"/>
          <input 
            type="text" 
            name="search" 
            className="max-w-16 rounded-lg outline-none" 
            placeholder="Search" 
            onChange={handleInputValue} 
            value={inputValue} 
          />
        </span>
      </div>

      {/* Displaying books */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-fit mt-7 ml-20 mr-20">
        {filteredBooks.map((book) => (
          <BookCard
            title={book.title}
            key={book.id}
            author={book.author}
            src={book.cover_image}
            id={book.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;
