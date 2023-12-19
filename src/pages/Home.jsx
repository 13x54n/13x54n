import React from "react";
import Landing from "../components/Home/Landing";
import Feature from "../components/Home/Feature";
import Blogs from "../components/Home/Blogs";
import Experience from "../components/Home/Experience";

export default function Home() {
  return (
    <div>
      <Landing />
      <Feature/>
      <Blogs/>
      <Experience/>
    </div>
  );
}
