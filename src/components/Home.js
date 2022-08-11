import React from "react";
import { name, city } from "../data/data.js";

const styleH = { color: 'firebrick' };

function Home(props) {
  // update the JSX being returned!
  return (
    <div id="home">
      <h1 style={styleH}>{name} is a Web Developer from {city}</h1>
    </div>
  )
}

export default Home;
