import React from "react";
import { useForm } from "react-hook-form";

const BookForm = (props) => {
  const { register, handleSubmit, formState: {errors, isDirty} } = useForm({mode: 'onTouched'});

  const renderErrorMessage = (name, type, message) => {
    if(errors[name]?.type === type){
      return <div className="invalid-feedback">{message}</div>;
    }
    return null;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(props.onBookSubmit)}>
        <input type="hidden" defaultValue={props.book?.id} {...register("id")} />
        <div className="form-group mb-2">
            <label>Name <span style={{color:'red'}}>*</span></label>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid': ''}`}
              placeholder="Enter name"
              defaultValue={props.book?.name}
              {...register("name", {required: true, maxLength: 20})}
            />
            {renderErrorMessage('name', 'required', 'Name is required.')}
            {renderErrorMessage('name', 'maxLength', 'Name must less then 20 chareacters.')}
          </div>
        <div className="form-group mb-2">
          <label>Description</label>
          <textarea
            className="form-control"
            rows="3"
            defaultValue={props.book?.description}
              {...register("description")}
          ></textarea>
        </div>
        <div className="form-group mb-2">
          <label>Price <span style={{color:'red'}}>*</span></label>
          <input
            type="number"
            className={`form-control ${errors.price ? 'is-invalid': ''}`}
            defaultValue={props.book?.price}
            {...register("price", {required: true, min: 1, max: 100000})}
          />
          {renderErrorMessage('price', 'required', 'Price is required.')}
          {renderErrorMessage('price', 'min', 'Price is between 1-100000.')}
          {renderErrorMessage('price', 'max', 'Price is between 1-100000.')}
        </div>
        <button type="submit" className="btn btn-primary" disabled={!isDirty}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookForm;