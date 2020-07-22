import React from 'react';
import List from "../components/List";
import Title from '../components/Title';
import "../App.css";
import { resources } from "../apis/resourceList";
export default function Resources() {
    return (

        <div className="LearnLinks" style={{ width: "100%" }}>
            <Title title="More Resources" subheading="Not enough? Here is an archive of more masterlists and toolkits we reccomend" />
            <List data={resources} alignment="left" />
        </div>
    );
}