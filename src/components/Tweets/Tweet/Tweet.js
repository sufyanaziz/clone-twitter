import React from "react";

import Card from "../../Card/Card";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RepeatIcon from "@material-ui/icons/Repeat";
import { getTime } from "../../../utils/Date";
import "./Tweet.css";

const Tweet = (props) => {
  const {
    author,
    date,
    time,
    tweet,
    image,
    username,
    verify,
    reply,
    like,
    retweet,
  } = props.data;

  const timestamp = getTime(date);

  return (
    <Card image={image}>
      <div className="tweet__author">
        <p className="tweet__author__name">{author}</p>
        {verify && <CheckCircleIcon className="verify__icon" />}
        <p className="tweet__author__username">@{username}</p>
        <p className="tweet__author__date">- {timestamp}</p>
      </div>
      <div className="tweet__tweets">
        <p>{tweet}</p>
      </div>
      <div className="tweet__info">
        <div>
          <ChatBubbleOutlineIcon className="tweet__info__icon" />
          <p>{reply}</p>
        </div>
        <div>
          <RepeatIcon className="tweet__info__icon" />
          <p>{retweet}</p>
        </div>
        <div>
          <FavoriteBorderIcon className="tweet__info__icon" />
          <p>{like}</p>
        </div>
      </div>
    </Card>
  );
};

export default Tweet;
