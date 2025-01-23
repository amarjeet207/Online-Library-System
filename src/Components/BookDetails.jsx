import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Arrow from "../assets/arrow_back.svg"
import { Books } from "../Utilities/booksData";
import { useParams } from "react-router-dom";
import star from "../assets/star2.svg"
import { useSelector } from 'react-redux';

const BookDetails = () => {

  const {id} = useParams();
  const books = useSelector(state => state.books);

  return (
    <div className="box-border font-serif">

      <Link to='/books' className=" font-serif m-8 p-3 text-zinc-600 flex gap-2" > <img src={Arrow} />All Books</Link>
      
      <div className="w-screen flex justify-center">

        { books.map((book)=>(book.id == id && <div key={book.id} className="w-8/12 flex gap-10 h-4/5 ">
            {/* Cover Img container */}
            <div className="w-1/3 h-full shadow-lg shadow-slate-400">
              <img
                src={book.cover_image}
                className="w-full h-full object-cover"
              />
            </div>
  
            {/* Details container */}
            <div className="w-2/3 h-full flex flex-col gap-4 overflow-auto">
              <h2 className="text-2xl font-bold">{book.title}</h2>
              <p className="text-lg text-zinc-600">{book.author}</p>
              <div className="flex gap-1 items-center">
              <p className="text-zinc-600">{book.ratings}</p>
              <img src={star}/>
              </div>
              <p className="text-zinc-600">{book.description}</p>
  
              <table>
                <tbody>
                  <tr>
                    <th className="text-left text-zinc-700">Publication Year</th>
                    <td className="text-zinc-600 text-center">{book.publication_year}</td>
                  </tr>
  
                  <tr>
                    <th className="text-left text-zinc-700">Genre</th>
                    <td className="text-center text-zinc-600">{book.genre}</td>
                  </tr>
  
                  <tr>
                    <th className="text-left text-zinc-700">Language</th>
                    <td className="text-zinc-600 text-center">{book.Langauge}</td>
                  </tr>
  
                  <tr>
                    <th className="text-left text-zinc-700">Pages</th>
                    <td className="text-zinc-600 text-center">{book.Pages}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          ))
        }
      
      </div>
    </div>
  );
};

export default BookDetails;
