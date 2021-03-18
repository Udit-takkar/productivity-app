import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import Img from "./time.jpg";
import "./SignIn.css";
import GoogleButton from "react-google-button";

const SignIn = () => {
  const firebase = useFirebase();
  const history = useHistory();

  const signInWithGoogle = () => {
    firebase
      .login({
        provider: "google",
        type: "popup",
      })
      .then(() => {
        history.push("/home");
      });
  };
  return (
    <div className="main_wrapper" style={{ background: "white" }}>
      <div className="mid_wrapper">
        <div className="left_wrapper">
          <h1>Track Your Time</h1>
          <p>
            Let's think 24 hours as 144 10 minute blocks <br />
            and track each one of them
          </p>
          <div>
            <GoogleButton
              onClick={(event) => {
                event.preventDefault();
                signInWithGoogle();
              }}
              className="googleButton"
            />
          </div>
        </div>
        <img src={Img} className="time" />
      </div>
    </div>
  );
};
export default SignIn;

{
  /* <a href='https://www.freepik.com/vectors/arrow'>Arrow vector created by pch.vector - www.freepik.com</a> */
}
