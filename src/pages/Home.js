import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

let HomeBody = {
  margin: "0 0",
  display: "flex",
  height: "100vh",
  width: "100vw"
}

export default function Home() {
  return (
    <div style={HomeBody}
    >
      <button type="button" className="left">
        <div className="leftcontent">
          <p>if you want to</p>
          <h1><Link to="/history">learn</Link></h1>
          <p id="history">history, read, watch, listen</p>
        </div>
      </button>
      <button type="button" className="right" href="/protest">
        <div className="rightcontent">
          <p>if you want to take</p>
          <h1><Link to="/contact">action</Link></h1>
          <p id="sign">sign, donate, protest, call/email</p>
        </div>
      </button>
    </div>
  );
}
