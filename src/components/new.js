import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Welcome from "../assets/images/Group_11.svg";
import GoogleLogo from "../assets/images/google.svg";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

export default function Login() {
  const useStyles = makeStyles((theme) => ({
    container: {
      padding: theme.spacing(3),
    },
    button: {
      background: "#8264B4 0% 0% no-repeat padding-box",
      backgroundColor: "#8264B4",
      border: "1px solid #70707059",
      borderRadius: "10px",
      opacity: 1,
      color: "white",
      font: "normal normal 600 20px/24px Montserrat",
      letterSpacing: "0px",
      fontSize: "0.9em",
    },
    welcome: {
      marginBottom: "1em",
      textAlign: "center",
      color: "white",
      fontFamily: "Montserrat",
    },
  }));
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      alignContent="center"
      justify="center"
      style={{
        minHeight: "100vh",
        boxSizing: "border-box",
        backgroundColor: "#F2EFF7",
      }}
    >
      <Grid
        item
        container
        xs={3}
        style={{
          justifyContent: "center",
          backgroundColor: "#404040",
          alignContent: "center",
          borderRadius: " 20px 0px 0px 20px",
        }}
      >
        <Grid container xs={6} style={{ justify: "center" }}>
          <Grid item className={classes.welcome}>
            <Typography variant="h6">Welcome Back!</Typography>
          </Grid>
          <Grid item className={classes.welcome}>
            <Typography variant="body2">
              Login to access the handpicked challenges and see where you stand
              among your peers.
            </Typography>
          </Grid>
        </Grid>
        <img
          style={{ justifyContent: "center" }}
          src={Welcome}
          alt="welcome"
        ></img>
      </Grid>

      <Card style={{ borderRadius: "0px 20px 20px 0px" }}>
        <Grid
          item
          container
          xs={12}
          style={{ justifyItems: "center", justifyContent: "center" }}
        >
          <Grid item className={classes.container}>
            <form>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Grid container spacing={2} direction="column">
                    <Grid item xs={12}>
                      <Typography>Email or Phone number</Typography>
                      <TextField
                        fullWidth
                        name="email"
                        size="small"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      Password
                      <TextField
                        fullWidth
                        size="small"
                        name="password"
                        variant="outlined"
                        type="password"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Button style={{ color: " #8264B4" }} size="small">
                        <Typography variant="body2">
                          Forgot Password?
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    className={classes.button}
                    fullWidth
                    type="submit"
                    variant="contained"
                  >
                    Log in
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item lg={3} xs={12} style={{ alignSelf: "center" }}>
            <Grid item xs={12}>
              <Typography style={{ marginBottom: "25%" }} variant="h6">
                Sign in using :
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <img src={GoogleLogo} alt="google"></img>
            </Grid>
            <Grid item xs={12}>
              <Typography style={{ marginTop: "25%" }}>
                <Link style={{ color: "#8264B4", fontSize: "0.9em" }}>
                  New to Devsnest? Create an account
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
