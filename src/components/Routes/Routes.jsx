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
            path: "eachCollege/:id",
            element: <CollegeDetails></CollegeDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/eachCollege/${params.id}`)
        }
      ]
    },
  ]);



  