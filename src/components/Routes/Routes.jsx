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
import Profile from "../../Pages/Profile/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
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
            element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://endgame-server.onrender.com/eachCollege/${params.id}`)
        },
        {
          path: "allCollege",
          element:<AllCollege></AllCollege>
        },
        {
          path: "detailCollege/:id",
          element:<PrivateRoute><DetailCollege></DetailCollege></PrivateRoute>,
          loader:({params}) => fetch(`https://endgame-server.onrender.com/detailCollege/${params.id}`)
        },
        {
          path: "admission",
          element:<Admission></Admission>
        },
        {
          path:"apply/:id",
          element:<ApplyForm></ApplyForm>,
          loader:({params}) => fetch(`https://endgame-server.onrender.com/apply/${params.id}`)
        },
        {
          path:"myCollege",
          element:<PrivateRoute><MyCollege></MyCollege></PrivateRoute>
        },
        {
          path: "profile",
          element:<Profile></Profile>
        }
      ]
    },
  ]);



  