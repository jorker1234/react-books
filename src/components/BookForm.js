import React from "react";
import { useForm } from "react-hook-form";

const BookForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({ mode: "onTouched", defaultValues: props.book });
  // formState: {errors, isDirty}  => const errors = formState.errors; const isDirty = formState.isDirty;

  const bookTypes = [
    { id: 1, name: "Action and adventure" },
    { id: 2, name: "Art/architecture" },
    { id: 3, name: "Alternate history" },
    { id: 4, name: "Autobiography" },
    { id: 5, name: "Anthology" },
    { id: 6, name: "Biography" },
    { id: 7, name: "Chick lit" },
    { id: 8, name: "Business/economics" },
    { id: 9, name: "Children's" },
    { id: 10, name: "Crafts/hobbies" },
    { id: 11, name: "Classic" },
    { id: 12, name: "Cookbook" },
    { id: 13, name: "Comic book" },
    { id: 14, name: "Diary" },
    { id: 15, name: "Coming-of-age" },
    { id: 16, name: "Dictionary" },
    { id: 17, name: "Crime" },
    { id: 18, name: "Encyclopedia" },
    { id: 19, name: "Drama" },
    { id: 20, name: "Guide" },
    { id: 21, name: "Fairytale" },
    { id: 22, name: "Health/fitness" },
    { id: 23, name: "Fantasy" },
    { id: 24, name: "History" },
    { id: 25, name: "Graphic novel" },
    { id: 26, name: "Home and garden" },
    { id: 27, name: "Historical fiction" },
    { id: 28, name: "Humor" },
    { id: 29, name: "Horror" },
    { id: 30, name: "Journal" },
    { id: 31, name: "Mystery" },
    { id: 32, name: "Math" },
    { id: 33, name: "Paranormal romance" },
    { id: 34, name: "Memoir" },
    { id: 35, name: "Picture book" },
    { id: 36, name: "Philosophy" },
    { id: 37, name: "Poetry" },
    { id: 38, name: "Prayer" },
    { id: 39, name: "Political thriller" },
    { id: 40, name: "Religion, spirituality, and new age" },
    { id: 41, name: "Romance" },
    { id: 42, name: "Textbook" },
    { id: 43, name: "Satire" },
    { id: 44, name: "True crime" },
    { id: 45, name: "Science fiction" },
    { id: 46, name: "Review" },
    { id: 47, name: "Short story" },
    { id: 48, name: "Scienc" },
    { id: 49, name: "Suspense" },
    { id: 50, name: "Self help" },
    { id: 51, name: "Thriller" },
    { id: 52, name: "Sports and leisure" },
    { id: 53, name: "Western" },
    { id: 54, name: "Travel" },
    { id: 55, name: "Young adult" },
    { id: 56, name: "True crime" },
  ];

  const renderErrorMessage = (name, type, message) => {
    if (errors[name]?.type === type) {
      return <div className="invalid-feedback">{message}</div>;
    }
    return null;
  };

  return (
    <div>
      <form onSubmit={handleSubmit(props.onBookSubmit)}>
        <input type="hidden" {...register("id")} />
        <div className="form-group mb-2">
          <label>
            Name <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            className={"form-control " + (errors.name ? "is-invalid" : "")}
            placeholder="Enter name"
            {...register("name", { required: true, maxLength: 200 })}
          />
          {renderErrorMessage("name", "required", "Name is required.")}
          {renderErrorMessage(
            "name",
            "maxLength",
            "Name must less then 200 chareacters."
          )}
        </div>
        <div className="form-group mb-2">
          <label>Description</label>
          <textarea
            className="form-control"
            rows="3"
            {...register("description")}
          ></textarea>
        </div>
        <div className="form-group mb-2">
          <label>
            Price <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number" 
            className={"form-control " + (errors.name ? "is-invalid" : "")}
            {...register("price", { required: true, min: 1, max: 100000 })}
          />
          {renderErrorMessage("price", "required", "Price is required.")}
          {renderErrorMessage("price", "min", "Price is between 1-100000.")}
          {renderErrorMessage("price", "max", "Price is between 1-100000.")}
        </div>
        <div className="form-group mb-2">
          <label>
            Author Name <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            className={
              "form-control " + (errors.authorName ? "is-invalid" : "")
            }
            {...register("authorName", { required: true, maxLength: 200 })}
          />
          {renderErrorMessage(
            "authorName",
            "required",
            "Author Name is required."
          )}
          {renderErrorMessage(
            "authorName",
            "maxLength",
            "Author Name must less then 200 chareacters."
          )}
        </div>
        <div className="form-group mb-2">
          <label>
            Author Email <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            className={
              "form-control " + (errors.authorEmail ? "is-invalid" : "")
            }
            {...register("authorEmail", {
              required: true,
              maxLength: 200,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {renderErrorMessage(
            "authorEmail",
            "required",
            "Author Email is required."
          )}
          {renderErrorMessage(
            "authorEmail",
            "maxLength",
            "Author Email must less then 200 chareacters."
          )}
          {renderErrorMessage(
            "authorEmail",
            "pattern",
            "Author Email is invalid email address."
          )}
        </div>
        <div className="form-group mb-2">
          <label>Rewards</label>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              {...register("bestselling")}
            />
            <label className="form-check-label">Best Selling</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              {...register("topmonthly")}
            />
            <label className="form-check-label">top 10 monthly selling</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              {...register("topyearly")}
            />
            <label className="form-check-label">top 100 yearly selling</label>
          </div>
        </div>
        <div className="form-group mb-2">
          <label>
            Status <span style={{ color: "red" }}>*</span>
          </label>
          <div className="form-check is-invalid">
            <input
              type="radio"
              className="form-check-input"
              value="available"
              {...register("status", { required: true })}
            />
            <label className="form-check-label">Available</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              value="outofstock"
              {...register("status", { required: true })}
            />
            <label className="form-check-label">Out of Stock</label>
          </div>
          {renderErrorMessage("status", "required", "Status is required.")}
        </div>
        <div className="form-group mb-2">
          <label>
              Type <span style={{ color: "red" }}>*</span>
          </label>
          <select className={"form-select " + (errors.type ? "is-invalid" : "")} {...register("type", {validate: (value) => value !== ""})}>
            <option value="">-- Please Select --</option>
            {bookTypes.map(bookType => <option value={bookType.id} key={bookType.id}>{bookType.name}</option>) }
          </select>
          {renderErrorMessage(
            "type",
            "validate",
            "Please Select Type."
          )}
        </div>

        <button type="submit" className="btn btn-primary" disabled={!isDirty}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookForm;
