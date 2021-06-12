import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
import firebase from "firebase/app";
import { useFirebase } from "react-redux-firebase";

const PrivateRoute = ({ children, ...remainingProps }) => {
  // console.log(children);
  // const firebase = useFirebase();
  const auth = useSelector((state) => state.firebase.auth);

  // useEffect(() => {
  //   const accessToken =
  //     "ya29.a0AfH6SMBOBWOp1RfIrlsPiecWDCV1wHg0umEoeWtsyHCWIgAdStpIKswWGgNeioI8x1GdRjmiKcf9Gqd1pOHimVtANVmqfcZ4g1slGfUR0oQEOlPwmP2OtVeuJUj0eYYJAiRXl98fNWpfhMDKhH7e-S7-28SfZyA";

  //   firebase
  //     .login({
  //       credential: firebase.auth.GoogleAuthProvider.credential(
  //         null,
  //         accessToken
  //       ),
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     });
  // }, []);

  return (
    <Route
      {...remainingProps}
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
