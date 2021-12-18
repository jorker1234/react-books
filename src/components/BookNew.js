import React from "react";
import { useNavigate } from "react-router-dom";
import BookForm from "./BookForm";
import { add } from "../apis/book";
import { ToastComponent, toastNotification } from './Toast';

const BookNew = () => {
  const navigate = useNavigate();

  const onBookSubmit = (book) => {
    add(book);
    toastNotification.show();
    setTimeout(() => {
        navigate("/");
    }, 1000);
  };

  return (
    <div className="container">
      <h3 className="mb-2">New Book</h3>
      <BookForm onBookSubmit={onBookSubmit}></BookForm>
      <ToastComponent message="Create success."></ToastComponent>
    </div> 
  );
};

export default BookNew;
