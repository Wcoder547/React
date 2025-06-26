import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/AboutUS/AboutUs";
import Contact from "./components/ContactUs/ContactUs";
import User from "./components/User";
import Github from "./components/Github/Github";
import { GithubInfoLoader } from "./components/Github/Github";

// const router = createBrowserRouter([{
//   path:'/',
//   element : <Layout/>,
//   children:[{
//     path:"",
//     element:<Home/>
//   },{
//     path:"about",
//     element:<About/>
//   },
// {
//   path:'Contact',
//   element:<Contact/>
// }]

// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="User/:userId" element={<User />} />
      <Route loader={GithubInfoLoader} path="Github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
