import React from "react";
import historyImage1 from "../../Images/Img/modern_furniture_designers.webp";
import historyImage2 from "../../Images/Img/akracing-intro-2021.webp";
import './History.css';

const History = () => {
  return (
    <div className="container m-5">
      <h2 className="history-title text-center m-5">History of the Modern Chair</h2>
      <div className="d-flex justify-content-center m-5">
        <img className="history-img" src={historyImage1} alt="" />
      </div>
      <p>
        The modern chair is something that perhaps we take for granted, but its
        evolution and development is a direct reflection of the social and
        economic status of society. In the 60’s, lives began to change with
        scheduling and demands in the work environment and a relatively sudden
        realization of more disposable income. There was a feeling that a new
        era had been entered…the era of Modernism. Meanwhile, technology was
        advancing at breakneck speed with the discovery of new materials that
        made it entirely possible to turn dreams and concepts of products into
        reality. The humble or ornate chair had been displaced by a new piece of
        furniture designed amidst a general conceptualization that more is not
        better.
      </p>
      <h2 className="history-title text-center m-5">History Of Gaming Chairs</h2>
      <div className="d-flex justify-content-center m-5">
        <img className="history-img" src={historyImage2} alt="" />
      </div>

      <p>
        The world’s first gaming chairs came out in 2006. At around the same
        time, pro esports began to emerge as a global entertainment juggernaut.
        The two industries have a symbiotic relationship that has disrupted
        several legacy ones. This article covers the history of gaming chairs
        from 2006 to 2022. Learn how the racing-style gaming chair grew from
        humble beginnings into a thriving direct-sales global business. The
        science behind healthy sitting landed from outer space in 1973. In the
        early 1990s, it was ported into office chairs to serve desktop computing
        needs. Soon after, the birth of the esports industry necessitated a new
        type of seating.{" "}
      </p>
    </div>
  );
};

export default History;
