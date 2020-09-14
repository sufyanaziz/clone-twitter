import React from "react";
import Layout from "../../components/Layout/HomeLayout";

const Bookmarks = ({ history }) => {
  return (
    <Layout history={history} page="bookmarks">
      <h1>Bookmarks</h1>
    </Layout>
  );
};

export default Bookmarks;
