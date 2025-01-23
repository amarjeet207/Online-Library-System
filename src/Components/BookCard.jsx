import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ src, title, author,id}) => {

 
  return (
    <div className="shadow-lg border-2 rounded-md overflow-hidden max-w-xs box-border">
      <img src={src} alt={title} className="h-60 w-full bg-cover bg-right-top" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700">{author}</p>
        <Link  to={`/bookDetails/${id}`}><button 
        className="mt-2 p-1 border-2  shadow-lg font-serif text-gray-700  rounded-md">
        View More</button></Link>
      </div>
    </div>
  );
};

export default BookCard;
