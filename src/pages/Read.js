import React from "react";
import Title from "../components/Title";
import Icon from "../components/Icon"
import List from "../components/List"

import bookIcons from "../apis/bookIcons"
import readingList from "../apis/readingList"

export default function Read() {
  const books = bookIcons.map(book => <Icon title={book.title} name={book.author}
    image={book.imgURL} alt={book.imgCap} height="100px" width="100%" />)

  return (
    <div style={{height: "100%", width: "100vw"}}>
      <Title title="Reading List" subheading="Curated list of Books, Poems, Articles, and PDF libraries exploring race & society"/>
      <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}>
        {books}
      </div>
      <List data={readingList} alignment="left"/>
    </div>
  );
}
