import React from "react";
import Landing from "../components/Home/Landing";
import Feature from "../components/Home/Feature";
import Blogs from "../components/Home/Blogs";

export default function Home() {
  return (
    <div>
      <Landing />
      <Feature/>
      <Blogs/>
    </div>
  );
}
