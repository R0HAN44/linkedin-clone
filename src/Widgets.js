import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articlesLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articlesRight">
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
      {newsArticle("Artificial Intelligence", "trending - 5866 readers")}
      {newsArticle("Tesla hits new heights", "trending - 2696 readers")}
      {newsArticle("Chandrayaan-3", "trending - 9089 readers")}
      {newsArticle("Mission Aditya-L1", "trending - 7943 readers")}
      {newsArticle("How to stay ahead of hacker", "trending - 6849 readers")}
      {newsArticle("Its crunch time for ed-tech", "trending - 3849 readers")}
    </div>
  );
}

export default Widgets;
