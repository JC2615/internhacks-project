import React from "react";
import "../pages/List.css";

export default function Title(props) {
    const data = props.data;
    const listItems = data.map((el) => <li><a href={el.link}><h2>{el.heading}</h2></a></li>);
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            textAlign: props.alignment,
            margin: "25px"
        }}>
            <p style={{color: "#A57456"}}>{props.title}</p>
            <ul className="no-bullets">{listItems}</ul>
        </div>
    )
}
