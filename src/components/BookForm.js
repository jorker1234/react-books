import React from "react";

class BookForm extends React.Component {
  state = {
    id: this.props.book?.id,
    name: this.props.book?.name || "",
    description: this.props.book?.description || "",
    price: this.props.book?.price || "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onBookSubmit(this.state);
  };

  render = () => {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group mb-2">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="form-group mb-2">
            <label>Description</label>
            <textarea
              className="form-control"
              rows="3"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            ></textarea>
          </div>
          <div className="form-group mb-2">
            <label>Price</label>
            <input
              type="text"
              className="form-control"
              value={this.state.price}
              onChange={(e) => this.setState({ price: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  };
}

export default BookForm;
