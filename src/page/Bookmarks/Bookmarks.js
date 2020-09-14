import React from "react";
import Layout from "../../components/Layout/HomeLayout";

import "./Bookmarks.css";

const Bookmarks = ({ history }) => {
  return (
    <Layout history={history} page="bookmarks">
      <div className="bookmark">
        <h3>You haven’t added any Tweets to your Bookmarks yet</h3>
        <p>When you do, they’ll show up here.</p>
      </div>
    </Layout>
  );
};

export default Bookmarks;
