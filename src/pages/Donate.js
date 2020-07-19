import React from 'react';
import Title from '../components/Title';
import List from "../components/List";
import {donates, donateNoTitle} from "../apis/donateIcons";
import "../pages/List.css";


export default function Donate(){

    return(
        <div className="ActionLinks" style={{height: "100%", width: "100vw", backgroundColor: "#28272C", color: "#e6e3db"}}>
            <Title title="Donate" subheading="Help with financial support"/>
            <div style={{marginTop: "25px"}}>
                <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                    {[donates[0], donates[1], donates[2], donates[3]]}
                </div>
                <List data={donateNoTitle} alignment="left"/>
            </div>
        </div>
    );
}