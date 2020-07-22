import React from 'react';
import Title from '../components/Title';
import List from "../components/List"
import "../App.css";
import {emailList, textAndCall} from "../apis/contactList";

export default function Contact() {
    return (
        <div className="ActionLinks" style={{width: "100%", backgroundColor: "#28272C", color: "#e6e3db" }}>
            <Title title="Text, Call, Email" subheading="Contact your local, county, state, and/or federal representatives" />
            <div className="NoHover">
                <List data={textAndCall} alignment="left" title="Contacts" />
            </div>
            <div className="Hover">
                <List data={emailList} alignment="left" title="Email"/>
            </div>
        </div>
    );
}