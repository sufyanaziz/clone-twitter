import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

import Signup from "../../components/Signup/Signup";
import "./Welcome.css";

const Welcome = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = "Clone twitter by sufyan";
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
    const newPath = `/i/form/signup`;
    document.title = `Signup - Clone twitter by sufyan`;
    window.history.pushState(null, null, newPath);
  };

  const welcome_title = [
    { title: "Follow your interest.", icon: SearchIcon },
    { title: "Hear what people are talking about.", icon: PeopleOutlineIcon },
    { title: "Join the conversation.", icon: ChatBubbleOutlineIcon },
  ];

  const signup_dialog = (
    <Signup
      open={open}
      close={() => setOpen(false)}
      title="Clone twitter by sufyan"
      page="welcome"
    />
  );

  return (
    <>
      {signup_dialog}
      <div className="welcome">
        <div className="welcome__banner">
          <TwitterIcon className="welcome__banner__icon" />
          <div className="welcome__banner__title">
            {welcome_title.map((data, index) => {
              let Icon = data.icon;
              return (
                <div key={index} className="welcome__banner__title__icon">
                  <Icon className="icon-welcome" />
                  <p className="title">{data.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="welcome__action">
          <div className="welcome__action__card">
            <TwitterIcon className="welcome__action__card__icon" />
            <h1>See what’s happening in the world right now</h1>
            <p>Join Twitter today.</p>
            <div className="welcome__action__card__action">
              <button onClick={handleClickOpen}>Sign up</button>
              <Link to="/login" className="login__btn">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Welcome;
