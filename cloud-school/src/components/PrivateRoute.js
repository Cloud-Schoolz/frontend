import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, useHistory } from "react-router-dom";

// import the component
function PrivateRoute({ component: Component, ...rest }) {

  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token") && rest.path.includes(localStorage.getItem("role"))) {
          // render component
          return <Component />;
        } else {
          // route to login
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

const mapStateToProps = (state) => {
    return ({
        role: state.role
    })
}

export default connect(mapStateToProps)(PrivateRoute);

