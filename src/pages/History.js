import React, { useState, useEffect } from "react";
import getDailyFact from "../apis/dailyfact";
import Title from "../components/Title"
import Entry from "../components/Entry"
import "../App.css";

import historyEntries from "../apis/historyEntries"

export default function History() {
  const [fact, setFact] = useState({});

  useEffect(function dailyFact() {
    getDailyFact().then((fact) => {
      setFact(fact);
    });
  }, []);

  const entries = historyEntries.map(data => <Entry key={data.id} title={data.title} text={data.info} />)

  return (
    <div className="LearnLinks" style={{
      height: "100%",
      width: "100%"
    }}>
      <Title title="Black History" subheading="Fact of the day: " extra={fact.info} />
      {entries}
    </div>
  );
}
