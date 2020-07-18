import React from "react";
import Title from "../components/Title";
import Icon from "../components/Icon"
import List from "../components/List"

import bookIcons from "../apis/bookIcons"
import readingList from "../apis/readingList"
import otherLibrariesList from "../apis/otherLibrariesList"
import "../App.css";

export default function Read() {
  const books = bookIcons.map(book => <Icon title={book.title} name={book.author}
                        image={book.imgURL} alt={book.imgCap} link={book.link}
                        imgHeight="175px" imgWidth="125px" />)

  return (
    <div className="LearnLinks" style={{
      height: "100%",
      width: "100vw"
    }}>
      <Title title="Reading List" subheading="Curated list of Books, Poems, Articles, and PDF libraries exploring race & society"/>
      <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
      }}>
        {books}
      </div>
      <List data={readingList} alignment="left"/>
      <List data={otherLibrariesList} alignment="left" title="Other Libraries" />
    </div>
  );
}
