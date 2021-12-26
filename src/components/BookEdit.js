import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookForm from "./BookForm";
import { get, update } from "../apis/book";
import { ToastComponent, successNotification, errorNotification } from './Toast';

const BookEdit = () => {
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  
  useEffect(() => {
    
    loadBook(id);
  }, []);

  const loadBook = async(id) => {
    const data = await get(id);
    setBook(data);
  }

  

  const onBookSubmit = async (book) => {
    const success = await update(book);
    if(success){
      successNotification.show();
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }else {
      errorNotification.show();
    }
    
  };

  const renderBook = () => {
    if(book){
      return <BookForm onBookSubmit={onBookSubmit} book={book}></BookForm>;
    }
    return <div>....</div>
  }

  return (
    
    <div className="container">
      <h3 className="mb-2">Edit Book</h3>
      {renderBook()}
      <ToastComponent successMessage="Update success." errorMessage="Something went wrong."></ToastComponent>
    </div>
  );
};
export default BookEdit;
