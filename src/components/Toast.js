import React, { useRef, useEffect } from "react";
import { Toast } from 'bootstrap'

let successNotification;
let errorNotification;
const ToastComponent = ({successMessage, errorMessage}) => {
  const toastSuccessRef = useRef();
  const toastErrorRef = useRef();

  useEffect(() => {
    successNotification = new Toast(toastSuccessRef.current);
    errorNotification = new Toast(toastErrorRef.current);
  }, []);

  return (
    <div>
      <div
        className="toast align-items-center text-white bg-success border-0 position-fixed bottom-0 end-0 m-2"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        ref={toastSuccessRef}
      >
        <div className="toast-body">{successMessage}</div>
      </div>
      <div
        className="toast align-items-center text-white bg-danger border-0 position-fixed bottom-0 end-0 m-2"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        ref={toastErrorRef}
      >
        <div className="toast-body">{errorMessage}</div>
      </div>
    </div>
  );
};

export { successNotification, errorNotification, ToastComponent };

