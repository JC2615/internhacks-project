import React from 'react';
import Title from "../components/Title";
import List from "../components/List";
import { petitionsList } from "../apis/petitionList";
import "../App.css";

export default function Petitions() {
    return (
        <div className="ActionLinks" style={{ height: "100%", width: "100%", backgroundColor: "#28272C", color: "#e6e3db" }}>
            <Title title="Petitions to Sign" subheading="Activism goes far beyond sharing a black square, it involves taking action. A great place to start is to sign petitions for change." />
            <List data={petitionsList} alignment="left" />
        </div>
    );
}