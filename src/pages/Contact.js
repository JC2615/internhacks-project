import React from 'react';
import Title from '../components/Title';
import List from "../components/List"
import {textAndCall} from "../apis/contactList";

export default function Contact(){
    return(
        <div style={{height: "100vh", width: "100vw", backgroundColor: "#28272C", color: "#e6e3db"}}>
            <Title title="Text, Call, Email" subheading="Contact your local, county, state, and/or federal representatives"/>
            <List data={textAndCall} alignment="left" title="Contacts"/>
        </div>
    );
}