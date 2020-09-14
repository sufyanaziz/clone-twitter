import React, { useEffect } from "react";
import { connect } from "react-redux";

import Layout from "../../components/Layout/HomeLayout";

const List = ({ user, history }) => {
  const username = user.credentials.username;

  useEffect(() => {
    document.title = `List created by @${username}`;
  }, []);

  return (
    <Layout history={history}>
      <h1>List</h1>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(List);
