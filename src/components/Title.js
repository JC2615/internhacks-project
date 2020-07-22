import React from "react";

export default function Title(props) {
  return (
    <div style={{
      textAlign: "center",
      margin: "auto 20px",
      padding: "20px"
    }}>
      <h1 style={{
        fontSize: "64px"
      }}>{props.title}</h1>
      <p>{props.subheading}{props.extra}</p>
    </div>
  )
}
