import React from 'react';
import Title from '../components/Title';
import List from "../components/List";
import { donates, donateNoTitle, donateWithTitle, otherNonProfits, majorOrganizations } from "../apis/donateIcons";
import "../pages/List.css";


export default function Donate() {

    return (
        <div className="ActionLinks" style={{ height: "100%", width: "100%", backgroundColor: "#28272C", color: "#e6e3db" }}>
            <Title title="Donate" subheading="Help with financial support" />
            <div style={{ marginTop: "25px" }}>
                <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                    {[donates[0], donates[1]]}
                </div>
                <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                    {[donates[2], donates[3]]}
                </div>
                <div style={{ marginTop: "50px" }}>
                    <List data={donateNoTitle} alignment="left" />
                    <List data={donateWithTitle} alignment="left" title="Community Organizations" />
                    <List data={otherNonProfits} alignment="left" title="Other Non-Profits" />
                    <List data={majorOrganizations} alignment="left" title="Major Organizations" />
                </div>
            </div>
        </div>
    );
}