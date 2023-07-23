import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import CollegeDetails from "../../Pages/Home/CollegeDetails/CollegeDetails";
import Register from "../../Pages/Home/Register/Register";
import AllCollege from "../../Pages/AllColleges/AllCollege/AllCollege";
import DetailCollege from "../../Pages/AllColleges/DetailCollege/DetailCollege";
import Admission from "../../Pages/Admission/Admission";
import ApplyForm from "../../Pages/ApplyForm/ApplyForm/ApplyForm";
import MyCollege from "../../Pages/ApplyForm/MyCollege/MyCollege";

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
          path: "register",
          element: <Register></Register>
        },
        {
            path: "eachCollege/:id",
            element: <CollegeDetails></CollegeDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/eachCollege/${params.id}`)
        },
        {
          path: "allCollege",
          element:<AllCollege></AllCollege>
        },
        {
          path: "detailCollege/:id",
          element:<DetailCollege></DetailCollege>,
          loader:({params}) => fetch(`http://localhost:5000/detailCollege/${params.id}`)
        },
        {
          path: "admission",
          element:<Admission></Admission>
        },
        {
          path:"apply/:id",
          element:<ApplyForm></ApplyForm>,
          loader:({params}) => fetch(`http://localhost:5000/apply/${params.id}`)
        },
        {
          path:"myCollege",
          element:<MyCollege></MyCollege>
        }
      ]
    },
  ]);



  