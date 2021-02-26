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
      <Grid container spacing={0}>
        <Grid
          xs={6}
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
        <Grid xs={6} item container>
          <Grid xs={12} item>
            <InputTasks />
          </Grid>
          <Grid xs={12} item>
            <TaskCard />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
