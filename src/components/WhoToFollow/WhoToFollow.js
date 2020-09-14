import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";

import "./WhoToFollow.css";
import { whoToFollow } from "../../data";

const WhoToFollow = () => {
  return (
    <React.Fragment>
      <div className="suggest">
        <div className="suggest__header">
          <h3>Who To Follow</h3>
        </div>
      </div>
      {whoToFollow.map((data, index) => {
        return (
          <Card type="info" image={data.image} key={index}>
            <div className="suggest__main">
              <div className="suggest__names">
                <p>{data.author}</p>
                <p>@{data.username}</p>
              </div>
              <div className="suggest__action">
                <Button type="outline" text="Follow" />
              </div>
            </div>
          </Card>
        );
      })}
    </React.Fragment>
  );
};

export default WhoToFollow;
