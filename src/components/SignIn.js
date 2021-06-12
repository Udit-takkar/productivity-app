import React, { useEffect } from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import Img from "../Assets/time.jpg";
import "../css/SignIn.css";
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
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.credential.accessToken);
        history.push("/home");
      });
  };
  return (
    <div className="main_wrapper" style={{ background: "white" }}>
      <div className="mid_wrapper">
        <div className="left_wrapper">
          <h1>Track Your Time</h1>
          <p>
            Let's think 24 hours as 144 X 10 minute blocks <br />
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
        <img src={Img} alt="illustration" className="time" />
      </div>
    </div>
  );
};
export default SignIn;

{
  /* <a href='https://www.freepik.com/vectors/arrow'>Arrow vector created by pch.vector - www.freepik.com</a> */
}
