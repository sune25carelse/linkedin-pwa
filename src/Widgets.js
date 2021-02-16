import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Luca is back", "Top News - 100 readers")}
      {newsArticle("COVID: SA updates", "Top News - 86 readers")}
      {newsArticle("LFC: Jurgen not leaving", "Top News - 200 readers ")}
      {newsArticle("Bitcoin: Musk buys in", "Top News - 131 readers")}
      {newsArticle(
        "PaPa react: ZeroToHero course open ",
        "Top News - 92 readers"
      )}
      {newsArticle("Vodacom: invest 1.2b in Network", "Top News - 18 readers")}
    </div>
  );
}

export default Widgets;
