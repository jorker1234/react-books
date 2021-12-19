import React, { useRef, useEffect } from "react";
import { Toast } from 'bootstrap'

let toastNotification;
const ToastComponent = ({message}) => {
  const toastRef = useRef();

  useEffect(() => {
    toastNotification = new Toast(toastRef.current);
  }, []);

  return (
    <div
      className="toast align-items-center text-white bg-success border-0 position-fixed bottom-0 end-0 m-2"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      ref={toastRef}
    >
      <div className="toast-body">{message}</div>
    </div>
  );
};

export { toastNotification, ToastComponent };

