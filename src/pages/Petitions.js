import React from 'react';
import Title from "../components/Title";
import List from "../components/List";
import "../App.css";

export default function Petitions() {
    return (
        <div className="ActionLinks" style={{ height: "100vh", width: "100vw", backgroundColor: "#28272C", color: "#e6e3db" }}>
            <Title title="Petitions to Sign" subheading="Activism goes far beyond sharing a black square, it involves taking action. A great place to start is to sign petitions for change."/>
        </div>
    );
}