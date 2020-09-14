import React, { useState, useEffect } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getDataUser } from "./redux/dispatch/dispatch_user";
import "./App.css";

import { LoadingLogo } from "./components/Loading/Loading";

// Page
import Welcome from "./page/Welcome/Welcome";
import Signup from "./page/Signup/Signup";
import Login from "./page/Login/Login";
import Home from "./page/Home/Home";
import Explore from "./page/Explore/Explore";
import Notifications from "./page/Notifications/Notifications";
import Messages from "./page/Messages/Messages";
import Bookmarks from "./page/Bookmarks/Bookmarks";
import Lists from "./page/Lists/Lists";
import Profile from "./page/Profile/Profile";

const App = (props) => {
  const item = JSON.parse(localStorage.getItem("credentials"));

  useEffect(() => {
    if (item !== null) {
      props.getDataUser(item.user);
    } else {
      return false;
    }
  }, []);

  const { authenticated, loading } = props.user;

  return (
    <div className="App">
      {loading ? (
        <LoadingLogo fullScreen />
      ) : authenticated ? (
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/notifications" component={Notifications} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/bookmarks" component={Bookmarks} />
          <Route exact path="/:username/lists" component={Lists} />
          <Route exact path="/:username" component={Profile} />
          <Redirect from="/" to="/home" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/i/form/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Switch>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getDataUser })(App);
