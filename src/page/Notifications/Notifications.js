import React, { useState } from "react";
import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/HomeLayout";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import { notificationAll, notificationMentions } from "../../data";
import { getTime } from "../../utils/Date";

import "./Notifications.css";

const Notifications = ({ history }) => {
  const [sectionAll, setSectionAll] = useState(true);
  const [sectionMentions, setSectionMentions] = useState(false);

  const notifAll = notificationAll;
  const notifMentions = notificationMentions;

  const handleSectionAll = () => {
    setSectionAll(true);
    setSectionMentions(false);
  };

  const handleSectionMentions = () => {
    setSectionAll(false);
    setSectionMentions(true);
  };

  return (
    <Layout history={history} page="notifications">
      <div className="notification">
        <div className="notification__header">
          <h4
            className={sectionAll && "notification__header__active"}
            onClick={handleSectionAll}
          >
            All
          </h4>
          <h4
            className={sectionMentions && "notification__header__active"}
            onClick={handleSectionMentions}
          >
            Mentions
          </h4>
        </div>
        <div className="notification__main">
          {sectionAll &&
            notifAll.map((data, index) => {
              return (
                <Card type="notification" image={data.image} key={index}>
                  <div className="notification__card__header">
                    <p>{data.author}</p>
                    <p>{data.content.contentType} from</p>
                    <p>{data.content.contentFrom}</p>
                  </div>
                  <div className="notification__card__main">
                    <p>{data.content.contentMain}</p>
                  </div>
                </Card>
              );
            })}
          {sectionMentions &&
            notifMentions.map((data, index) => {
              return (
                <Card image={data.image} key={index}>
                  <div className="notification__card__author">
                    <p className="notification__card__author__name">
                      {data.author}
                    </p>
                    {data.verify && (
                      <CheckCircleIcon className="notification__card__icon" />
                    )}
                    <p className="notification__card__author__username">
                      @{data.username}
                    </p>
                    <p className="notification__card__author__date">
                      - {getTime(data.date)}
                    </p>
                  </div>
                  <div className="notification__card__main__mentions">
                    <p>{data.content.contentMain}</p>
                  </div>
                </Card>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export default Notifications;
