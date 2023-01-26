import React from "react";

import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "./components/Home";
import SingleProduct from "./components/SingleProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "launches/:id",
          element: <SingleProduct></SingleProduct>,
        },
        // {
        //   path: "competitive/quiz",
        //   element: <Quiz></Quiz>,
        // },
        // {
        //   path: "competitive/resources",
        //   element: <Resources></Resources>,
        // },
        // {
        //   path: "competitive/progress",
        //   element: <Progress></Progress>,
        // },
        // {
        //   path: "competitive/site",
        //   element: <Site></Site>,
        // },

        // {
        //   path: "/help",
        //   element: <Help></Help>,
        // },
      ],
    },
  ]);
  return (
    <div>
      {" "}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
