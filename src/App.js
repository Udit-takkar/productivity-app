import React from "react";
import "./App.css";
import Blocks from "./components/Blocks";
import Grid from "@material-ui/core/Grid";
import TextData from "./components/TaskCard";
import InputTasks from "./components/InputTasks";
import TaskCard from "./components/TaskCard";

function App() {
  return (
    <div className="App">
      <Grid container style={{ marginTop: "1rem" }} spacing={0}>
        <Grid
          md={6}
          sm={6}
          xs={10}
          item
          alignItems="center"
          justify="center"
          style={{
            minHeight: "100vh",
            paddingLeft: "20px",
          }}
        >
          <Blocks />
        </Grid>
        <Grid
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
          <Grid xs={7} style={{ height: "100%" }} item>
            <TaskCard />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
