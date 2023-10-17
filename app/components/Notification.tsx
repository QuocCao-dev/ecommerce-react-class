"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const Notification = () => {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
};
export default Notification;
