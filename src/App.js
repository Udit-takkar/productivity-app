import React, { useEffect, useState } from "react";
import "./css/App.css";
import Blocks from "./components/Blocks";
import Grid from "@material-ui/core/Grid";
import TextData from "./components/TaskCard";
import InputTasks from "./components/InputTasks";
import TaskCard from "./components/TaskCard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import { useFirebase } from "react-redux-firebase";
import Spinner from "react-spinkit";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

function App() {
  const firebase = useFirebase();
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  useEffect(() => {
    const accessToken = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;

    if (accessToken) {
      firebase
        .login({
          credential: firebase.auth.GoogleAuthProvider.credential(
            null,
            accessToken
          ),
        })
        .then((response) => {
          console.log(response);
          history.push("/home");
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);
  if (loading) {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </Grid>
      </Grid>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/home">
            <Grid container spacing={0}>
              <Grid
                md={6}
                sm={6}
                xs={10}
                item
                alignItems="center"
                justify="center"
                style={{
                  minHeight: "100%",
                }}
              >
                <Blocks />
              </Grid>
              <Grid
                justify="center"
                xs={12}
                sm={4}
                md={6}
                item
                container
                direction="row"
                spacing={2}
                style={{
                  width: "fit-content",
                }}
              >
                <Grid item xs={10} style={{ height: "fit-content" }}>
                  <InputTasks />
                </Grid>
                <Grid
                  xs={7}
                  style={{
                    height: "500px",
                    overflowY: "auto",
                    border: "0.5px solid grey",
                    borderRadius: "15px",
                  }}
                  item
                >
                  <TaskCard />
                </Grid>
              </Grid>
            </Grid>
          </PrivateRoute>

          <Route exact path="/">
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ minHeight: "100vh" }}
            >
              <Grid item>
                <SignIn />
              </Grid>
            </Grid>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
