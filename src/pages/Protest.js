import React from 'react';
import Title from "../components/Title";
import List from "../components/List";
import {protestInfo, protestTips} from "../apis/protestInformation";




export default function Protest(){
    return(
        <div style={{
          height: "100%",
          width: "100vw",
          backgroundColor: "#28272C",
          color: "#e6e3db"
        }}>
            <Title title="Protest Information" subheading="Protest Info"/>
            <List data={protestInfo} alignment="center" title="How to Find Protests Near You:"/>
            <List data={protestTips} alignment="left" title="Tips Before You Go"/>
        </div>
    );
}
