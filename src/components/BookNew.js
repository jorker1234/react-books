import React from "react";
import { useNavigate } from "react-router-dom";
import BookForm from "./BookForm";
import { add } from "../apis/book";
import { ToastComponent, successNotification, errorNotification } from './Toast';

const BookNew = () => {
  const navigate = useNavigate();

  const onBookSubmit = async (book) => {
    const success = await add(book);
    if(success) {
      successNotification.show();
      setTimeout(() => {
          navigate("/");
      }, 1000);
    }else {
      errorNotification.show();
    }
  };

  return (
    <div className="container">
      <h3 className="mb-2">New Book</h3>
      <BookForm onBookSubmit={onBookSubmit}></BookForm>
      <ToastComponent successMessage="Create success." errorMessage="Something went wrong."></ToastComponent>
    </div> 
  );
};

export default BookNew;
