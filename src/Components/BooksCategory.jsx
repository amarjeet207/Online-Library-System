import React from "react";
import { useParams } from "react-router-dom";
import { Books } from "../Utilities/booksData";
import BookCard from "./BookCard";
import { useSelector } from 'react-redux';

const BooksCategory = () => {
  const { category } = useParams();
  const books = useSelector(state => state.books);

  return (
    <div className="flex flex-col items-center gap-7 max-w-screen box-border p-5">
      <h1 className=" text-4xl font-serif">{category}</h1>
      <div className="grid grid-cols-2 gap-10 ">
      {books.map((book) => ( book.genre == category) ?
          (<BookCard
            title={book.title}
            key={book.id}
            author={book.author}
            src={book.cover_image}
            id={book.id}
          />) : null
        )}
      </div>
    </div>
  );
};

export default BooksCategory;
