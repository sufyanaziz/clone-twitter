import React from "react";
import Tweet from "./Tweet/Tweet";

import datas from "../../data";
import "./Tweets.css";

const Tweets = (props) => {
  const tweet = datas.map((data, index) => {
    return <Tweet key={index} data={data} />;
  });

  return <div className="tweets">{tweet}</div>;
};

export default Tweets;
