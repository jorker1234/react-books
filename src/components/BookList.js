import React from "react";
import { Link } from "react-router-dom";
import { list, remove } from "../apis/book";
import { ToastComponent, toastNotification } from './Toast';

class BookList extends React.Component {
  state = {
    books: list(),
  };

  componentDidMount

    onBookDelete = (id) => {
        remove(id);
        toastNotification.show();
        this.setState({
            books: list(),
        })
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
        <ToastComponent message="Delete success."></ToastComponent>
      </div>
    );
  };
}

export default BookList;
