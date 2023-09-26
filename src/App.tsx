import { RouterProvider } from "react-router-dom";
import router from "./utils/navigation/router";
import { AppContextProvider } from "./contexts/app-context";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/global.scss";
import "./components/layout/layout.scss";

function App() {
  return (
    <>
      <AppContextProvider>
        <RouterProvider router={router} />
        <ToastContainer position="top-right" theme="colored" />
      </AppContextProvider>
    </>
  );
}

export default App;
