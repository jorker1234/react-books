import React from "react";
import { Link } from "react-router-dom";
import { list, remove } from "../apis/book";
import { ToastComponent, successNotification, errorNotification } from './Toast';

class BookList extends React.Component {
  state = {
    books: [],
  };

  componentDidMount = async () => {
    await this.loadBooks();
  }

  loadBooks = async () => {
    const books = await list();
    this.setState({ books });
  }

    onBookDelete = async (id) => {
        if(window.confirm('Are you sure you want to delete this book?')){
          const success = await remove(id);
          if(success) {
            successNotification.show();
            await this.loadBooks();
          }else {
            errorNotification.show();
          }
        }
    }

  renderBooks = () => {
    return this.state.books.map((book) => {
      return (
        <tr key={book.id}>
          <th>{book.id}</th>
          <th>{book.name}</th>
          <td>{book.description}</td>
          <td>{book.price}</td>
          <td>
              <div>
            <Link to={`/edit/${book.id}`} className="btn btn-primary me-2">
              Edit
            </Link>
            <button type="button" className="btn btn-danger" onClick={() => this.onBookDelete(book.id)}>
              Delete
            </button>
            </div>
          </td>
        </tr>
      );
    });
  };
  render = () => {
    return (
      <div className="container">
        <h3 className="mb-2">Book list</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{this.renderBooks()}</tbody>
        </table>
        <ToastComponent successMessage="Delete success." errorMessage="Something went wrong."></ToastComponent>
      </div>
    );
  };
}

export default BookList;
