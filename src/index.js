import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);



