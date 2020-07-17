import React from 'react';
import Title from '../components/Title';
import donateList from "../apis/donateIcons";
import Icon from "../components/Icon";

export default function Donate(){
    const funds = donateList.map(fund => <Icon title={fund.title} name={fund.author}
                                                 image={fund.imgURL} alt={fund.imgCap} link={fund.link}
                                                 imgHeight="200px" imgWidth="100%" />)

    return(
        <div style={{height: "100vh", width: "100vw", backgroundColor: "#28272C", color: "#e6e3db"}}>
            <Title title="Donate" subheading="Help with financial support"/>
            <div
            style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
        }}>
                {funds}
            </div>
        </div>
    );
}