import React from "react";

export default function Icon(props) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      width: "auto",
      height: "auto",
      margin: "50px",
    }}>
      <a href={props.link}>
        <img src={props.image} alt={props.caption}
          width={props.imgWidth} height={props.imgHeight} />
      </a>
      <h2 style={{
        fontSize: "19px"

      }}>{props.title}</h2>
      <p style={{ fontSize: "17px" }}>{props.name}</p>
    </div>
  )
}
