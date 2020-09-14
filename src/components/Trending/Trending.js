import React from "react";
import Card from "../Card/Card";

import "./Trending.css";
import { trendsData } from "../../data";

const Trending = ({ page }) => {
  return (
    <React.Fragment>
      <div className={page === "explore" ? "trending_explore" : "trending"}>
        <div className="trending__header">
          <h3>Indonesian trends</h3>
        </div>
      </div>
      {trendsData.map((data, index) => {
        return (
          <Card
            type={page === "explore" ? undefined : "info"}
            key={index}
            page={page}
          >
            <div className="trending__topic">
              <p>{`${index + 1} - ${data.topic}`}</p>
            </div>
            <div className="trending__keyword">
              <p>#{data.keyword}</p>
            </div>
            <div className="trending__counts">
              <p>{data.tweet_count} Tweets</p>
            </div>
          </Card>
        );
      })}
    </React.Fragment>
  );
};

export default Trending;
