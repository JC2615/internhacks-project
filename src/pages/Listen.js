import React from 'react';
import Title from '../components/Title';
import List from "../components/List";
import "../App.css";
import {podcasts, otherMedia} from "../apis/podcastList";

export default function Listen() {
  return (
    <div className="LearnLinks" style={{
      height: "100%", 
      width: "100vw"
    }}>
      <Title title="For Streaming" subheading="Playlists, Podcasts, and Youtube videos for self educating and new insights" />
      <div style={{marginTop: "25px"}}>
        <p style={{width: "14.4%", marginBottom: "25px", textAlign: "right", color: "#A57456"}}>Podcasts</p>
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
          {[podcasts[0], podcasts[1], podcasts[2]]}
        </div>
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
          {[podcasts[3], podcasts[4], podcasts[5]]}
        </div>
      </div>
      <List data={otherMedia} title="Stream" alignment="left"/>
    </div>
  );
}

// import { TwitterTimelineEmbed } from "react-twitter-embed";
// /* <div>
//               <TwitterTimelineEmbed
//                 sourceType="profile"
//                 screenName="blklivesmatter"
//                 theme="dark"
//                 options={{height: "400", width: "30%"}}
//               />
//               </div> */
