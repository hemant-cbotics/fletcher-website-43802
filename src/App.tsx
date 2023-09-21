import { RouterProvider } from "react-router-dom";
import router from "./utils/navigation/router";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/global.scss";
import "./components/layout/layout.scss";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" theme="colored" />
    </>
  );
}

export default App;
