import React from "react";
import { Route, Redirect } from "react-router-dom";
import propTypes from "prop-types";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: propTypes.object.isRequired,
};

export default PrivateRoute;
