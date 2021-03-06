import React from 'react';
import Title from '../components/Title';
import List from "../components/List";
import "../App.css";
import { podcasts, otherMedia } from "../apis/podcastList";

export default function Listen() {
  return (
    <div className="LearnLinks" style={{
      height: "100%",
      width: "100%"
    }}>
      <Title title="For Streaming" subheading="Playlists, Podcasts, and Youtube videos for self educating and new insights" />
      <div style={{ display: "flex", marginTop: "25px" , flexDirection: "column", width: "fit-content(50%)"}}>
        <p style={{display: "flex", color: "#A57456", justifyContent: "center",}}>Podcasts</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
          {[podcasts[0], podcasts[1], podcasts[2]]}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
          {[podcasts[3], podcasts[4], podcasts[5]]}
        </div>
      </div>
      <List data={otherMedia} title="Stream" alignment="left" />
    </div>
  );
}
