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
      <Grid container style={{ marginTop: "1rem" }} spacing={2}>
        <Grid
          md={6}
          sm={6}
          xs={12}
          item
          alignItems="center"
          justify="center"
          style={{
            minHeight: "100vh",
            paddingLeft: "5%",
          }}
        >
          <Blocks />
        </Grid>
        <Grid
          xs={12}
          sm={4}
          md={4}
          item
          container
          direction="column"
          spacing={3}
        >
          <Grid item>
            <InputTasks />
          </Grid>
          <Grid item>
            <TaskCard />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
