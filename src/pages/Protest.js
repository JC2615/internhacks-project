import React from 'react';
import Title from "../components/Title";
import List from "../components/List";
import "../App.css";
import {protestInfo, protestTips} from "../apis/protestInformation";




export default function Protest(){
    return(
        <div className= "ActionLinks" style={{
          height: "100%",
          width: "100vw",
          backgroundColor: "#28272C",
          color: "#e6e3db"
        }}>
            <Title title="Protest Information" subheading="Protest Info"/>
            <div className="NoHover">
            <List data={protestInfo} alignment="center" title="How to Find Protests Near You:"/>
            </div>
            <List data={protestTips} alignment="left" title="Tips Before You Go"/>
        </div>
    );
}

