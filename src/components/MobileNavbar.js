import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";
import "./MobileNavbar.css";

export default function MobileNavbar() {
    let barColor = "darker";
    let navColor = "dark";
    const location = useLocation();

    if (location.pathname === "/protest" || location.pathname === "/petitions" || location.pathname === "/contact" || location.pathname === "/donate") {
        barColor = "lighter";
        navColor = "light";
    }
    return (
        <div className="MobileBar">
            <Navbar bg={barColor} variant={navColor} expand="sm">
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Toggle id="toggler" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Navbar.Text ><Link to="/history">History</Link></Navbar.Text>
                        <Navbar.Text ><Link to="/read">Read</Link></Navbar.Text>
                        <Navbar.Text ><Link to="/watch">Watch</Link></Navbar.Text>
                        <Navbar.Text ><Link to="/listen">Listen</Link></Navbar.Text>
                        <Navbar.Text ><Link to="/resources">More</Link></Navbar.Text>
                        <Navbar.Text ><Link to="/donate">Donate</Link></Navbar.Text>
                        <Navbar.Text ><Link to="/petitions">Petitions</Link></Navbar.Text>
                        <Navbar.Text ><Link to="/protest">Protest</Link></Navbar.Text>
                        <Navbar.Text ><Link to="/contact">Contact</Link></Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>


    )
}