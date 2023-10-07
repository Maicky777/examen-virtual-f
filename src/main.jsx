// import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { ExamenProvider } from "./context/ExamenContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Model_Pagina_1 } from "./pages/Model_Pagina_1.jsx";
import { Model_Pagina_2 } from "./pages/Model_Pagina_2.jsx";
import { Model_Pagina_3 } from "./pages/Model_Pagina_3.jsx";
import { Model_Pagina_4 } from "./pages/Model_Pagina_4.jsx";
import { NotFound } from "./components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/modalidad_1",
    element: <Model_Pagina_1 />,
    errorElement: <NotFound />,
  },
  {
    path: "/modalidad_2",
    element: <Model_Pagina_2 />,
    errorElement: <NotFound />,
  },
  {
    path: "/modalidad_3",
    element: <Model_Pagina_3 />,
    errorElement: <NotFound />,
  },
  {
    path: "/modalidad_4",
    element: <Model_Pagina_4 />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <ExamenProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </ExamenProvider>
  </>
  // </React.StrictMode>
);
