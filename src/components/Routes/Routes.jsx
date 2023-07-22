import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import CollegeDetails from "../../Pages/Home/CollegeDetails/CollegeDetails";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "college/:id",
            element: <CollegeDetails></CollegeDetails>,
            loader: ({params}) => fetch(`https://assignment-ten-server-site-mohammadshahansha.vercel.app/chefrecipe/${params.id}`)
        }
      ]
    },
  ]);



  