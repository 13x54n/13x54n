import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = (props) => {
  const { component: ChildComponent } = props;

  return (
    <React.Fragment>
      <Navbar />
      <ChildComponent />
      <Footer/>
    </React.Fragment>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout component={Home} />,
    // loader: rootLoader,
    //   children: [
    //     {
    //       path: "team",
    //       element: <Team />,
    //       loader: teamLoader,
    //     },
    //   ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
