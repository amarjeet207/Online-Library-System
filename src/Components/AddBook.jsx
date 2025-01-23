import React from "react";
import NavBar from "./NavBar";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addBook } from "../Features/booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = (data) => {
    dispatch(addBook({ id: Date.now(), ...data }));
    navigate('/books');
  };

  return (
    <div>
      <div className="bg-customGreen p-2">
        <NavBar />
      </div>

      <div className="flex flex-col items-center pt-16 gap-4">
        <h1 className="text-3xl text-emerald-700">Add Books</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-5 w-full max-w-3xl">
          <div className="col-span-1">
            <input
              type="text"
              {...register("title", {
                required: "This field is required",
                pattern: {
                  value: /^(?!\s*$)[A-Za-z\s]+$/,
                  message: "Only alphabets and spaces allowed",
                },
              })}
              placeholder="Title"
              className={`border-2 border-zinc-700 outline-0 p-2 rounded-lg w-full ${errors.title ? "border-red-500" : ""}`}
            />
            {errors.title && <p className="text-red-400">{errors.title.message}</p>}
          </div>

          <div className="col-span-1">
            <input
              type="text"
              {...register("author", {
                required: "This field is required",
                pattern: {
                  value: /^(?!\s*$)[A-Za-z\s]+$/,
                  message: "Only alphabets and spaces allowed",
                },
              })}
              placeholder="Author"
              className={`border-2 border-zinc-700 outline-0 p-2 rounded-lg w-full ${errors.author ? "border-red-500" : ""}`}
            />
            {errors.author && <p className="text-red-400">{errors.author.message}</p>}
          </div>

          <div className="col-span-1">
            <input
              type="number"
              {...register("publication_year", {
                required: "This field is required",
                min: { value: 1000, message: "Enter a valid year" },
                max: { value: new Date().getFullYear(), message: "Enter a valid year" },
              })}
              placeholder="Publication Year"
              className={`border-2 border-zinc-700 outline-0 p-2 rounded-lg w-full ${errors.publication_year ? "border-red-500" : ""}`}
            />
            {errors.publication_year && <p className="text-red-400">{errors.publication_year.message}</p>}
          </div>

          <div className="col-span-1">
            <input
              type="text"
              {...register("genre", {
                required: "This field is required",
                pattern: {
                  value: /^(?!\s*$)[A-Za-z\s]+$/,
                  message: "Only alphabets and spaces allowed",
                },
                minLength: { value: 3, message: "At least contains three characters" },
              })}
              placeholder="Genre"
              className={`border-2 border-zinc-700 outline-0 p-2 rounded-lg w-full ${errors.genre ? "border-red-500" : ""}`}
            />
            {errors.genre && <p className="text-red-400">{errors.genre.message}</p>}
          </div>

          <div className="col-span-2">
            <input
              type="text"
              {...register("description", {
                required: "This field is required",
                pattern: {
                  value: /^(?!\s*$)[A-Za-z\s]+$/,
                  message: "Only alphabets and spaces allowed",
                },
                minLength: { value: 3, message: "At least contains three characters" },
              })}
              placeholder="Description"
              className={`border-2 border-zinc-700 outline-0 p-2 rounded-lg w-full ${errors.description ? "border-red-500" : ""}`}
            />
            {errors.description && <p className="text-red-400">{errors.description.message}</p>}
          </div>

          <div className="col-span-1">
            <input
              type="text"
              {...register("cover_image", {
                required: "This field is required",
              })}
              placeholder="Cover Image URL"
              className={`border-2 border-zinc-700 outline-0 p-2 rounded-lg w-full ${errors.cover_image ? "border-red-500" : ""}`}
            />
            {errors.cover_image && <p className="text-red-400">{errors.cover_image.message}</p>}
          </div>
          
          <div className="col-span-1">
            <input
              type="number"
              {...register("ratings", {
                required: "This field is required",
                min: { value: 1, message: "Enter a valid rating number" },
              })}
              placeholder="Ratings"
              className={`border-2 border-zinc-700 outline-0 p-2 rounded-lg w-full ${errors.ratings ? "border-red-500" : ""}`}
            />
            {errors.ratings && <p className="text-red-400">{errors.ratings.message}</p>}
          </div>

          <div className="col-span-1">
            <input
              type="text"
              {...register("language", {
                required: "This field is required",
                pattern: {
                  value: /^(?!\s*$)[A-Za-z\s]+$/,
                  message: "Only alphabets and spaces allowed",
                },
                minLength: { value: 3, message: "At least contains three characters" },
              })}
              placeholder="Language"
              className={`border-2 border-zinc-700 outline-0 p-2 rounded-lg w-full ${errors.language ? "border-red-500" : ""}`}
            />
            {errors.language && <p className="text-red-400">{errors.language.message}</p>}
          </div>

          <div className="col-span-1">
            <input
              type="number"
              {...register("pages", {
                required: "This field is required",
                min: { value: 1, message: "Enter a valid page number" },
              })}
              placeholder="Pages"
              className={`border-2 border-zinc-700 outline-0 p-2 rounded-lg w-full ${errors.pages ? "border-red-500" : ""}`}
            />
            {errors.pages && <p className="text-red-400">{errors.pages.message}</p>}
          </div>

          <div className="col-span-2">
            <input
              type="submit"
              disabled={isSubmitting}
              value={isSubmitting ? "Submitting" : "Submit"}
              className="bg-emerald-800 text-slate-50 pl-2 pr-2 py-1 rounded-lg cursor-pointer w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
