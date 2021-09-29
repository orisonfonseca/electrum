import React from "react";
import { Route, Redirect } from "react-router-dom";
import propTypes from "prop-types";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated === true ? (
          <Redirect to="/list" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
PublicRoute.propTypes = {
  auth: propTypes.object.isRequired,
};

export default PublicRoute;
