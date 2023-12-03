import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Registration/Login";
import LoginStudent from "./pages/Registration/LoginStudent";
import LoginMentor from "./pages/Registration/LoginMentor";
import Register from "./pages/Registration/Register";
import RegisterMentor from "./pages/Registration/RegisterMentor";
import RegisterStudent from "./pages/Registration/RegisterStudent";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";
import Search_student from "./pages/Search/Search_student";
import Search_mentor from "./pages/Search/Search_mentor";

axios.defaults.baseURL = "http://localhost:4000";

const LayOut = () => {
  return (
    // <h1>hi</h1>
    // <UserProvider>
    //   <ToastContainer />
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
      <ToastContainer />
    </>
    //   <Footer />
    // </UserProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/student/login",
        element: <LoginStudent />,
      },
      {
        path: "/mentor/login",
        element: <LoginMentor />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/search_student",
        element: <Search_student />,
      },
      {
        path: "/search_mentor",
        element: <Search_mentor />,
      },
      {
        path: "/mentor/register",
        element: <RegisterMentor />,
      },
      {
        path: "/student/register",
        element: <RegisterStudent />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
