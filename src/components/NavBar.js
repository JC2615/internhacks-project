import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  let bgColor = "#e6e3db";
  const location = useLocation();

  if (location.pathname === "/protest" || location.pathname === "/petitions" || location.pathname === "/contact" || location.pathname === "/donate") {
    bgColor = "#28272C";
  }
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", backgroundColor: bgColor }}>
        <nav className="Navbar">
          <div className="LearnBar">
            <div className="LearnNavHeading">Learn</div>
            <div className="LearnNavText LearnLinks">
              <Link to="/history">History</Link>
              <Link to="/read">Read</Link>
              <Link to="/watch">Watch</Link>
              <Link to="/listen">Listen</Link>
              <Link to="/resources">More</Link>
            </div>
          </div>

          <div className="ActionBar">
            <div className="ActionNavHeading">Action</div>
            <div className="ActionNavText ActionLinks">
              <Link to="/donate">Donate</Link>
              <Link to="/petitions">Petition</Link>
              <Link to="/protest">Protest</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
