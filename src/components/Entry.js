import React from "react";

export default function Title(props){
    return(
      <div style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        width: "90%",
        height: "auto",
        margin: "50px"
      }}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    )
  }
