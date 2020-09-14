import React, { useState, useEffect, useRef } from "react";
import autosize from "autosize";

import Layout from "../../components/Layout/HomeLayout";
import FieldInput from "../../components/FieldInput/FieldInput";
import Tweets from "../../components/Tweets/Tweets";

const Home = (props) => {
  useEffect(() => {
    document.title = "Home / Clone Twitter";
  }, []);

  return (
    <Layout history={props.history} page="home">
      <FieldInput />
      <Tweets />
    </Layout>
  );
};

export default Home;
