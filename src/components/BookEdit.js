import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookForm from "./BookForm";
import { get, update } from "../apis/book";
import { ToastComponent, toastNotification } from "./Toast";

const BookEdit = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const book = get(id);

  const onBookSubmit = (book) => {
    console.log(book);
    update(book);
    toastNotification.show();
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="container">
      <h3 className="mb-2">Edit Book</h3>
      <BookForm onBookSubmit={onBookSubmit} book={book}></BookForm>
      <ToastComponent message="Update success."></ToastComponent>
    </div>
  );
};
export default BookEdit;
