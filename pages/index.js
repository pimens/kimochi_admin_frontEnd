import React from "react";
import Link from "next/link";
import Login from "./Login";


function index() {
  return (
    <div>
      <Login/>
      
      {/* <Link href="/Login">
        <a>About Page</a>
      </Link> */}
    </div>
  );
}

export default index;
