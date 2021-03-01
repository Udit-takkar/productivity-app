import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import allActions from "../actions/index";

export default function InputTasks() {
  const [Tasks, setTasks] = useState({
    task: "",
    color: "",
    id: "",
  });

  useEffect(() => {
    const source = axios.CancelToken.source();
    const selectColors = axios
      .get("../colors.json") //  Correct this API call
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => console.log(err));
    return () => {
      source.cancel();
    };
  }, []);

  const handleChange = (e) => {
    setTasks({ ...Tasks, [e.target.name]: e.target.value });
  };

  const task = useSelector((state) => {
    // console.log(state);
    return state.addTask.tasks;
  });

  // console.log(task);
  // console.log(Tasks);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    if (Tasks.color === "") {
      alert("Please Select a Colour!");
    } else if (Tasks.task.length === 0) {
      alert("Please Enter Task!");
    } else {
      dispatch(
        allActions.AddTask({
          task: Tasks.task,
          color: Tasks.color,
          id: uuidv4(),
        })
      );
      setTasks({ task: "", color: "", id: "" });
    }
  };

  // console.log(task);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  return (
    <Grid container>
      <Grid item>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            name="task"
            id="standard-basic"
            onChange={handleChange}
            label="Standard"
            value={Tasks.task}
          />
        </form>
      </Grid>
      <Grid item>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="demo-customized-select-native">Color</InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            name="color"
            onChange={handleChange}
            value={Tasks.color}
          >
            <option aria-label="gray" value="gray" />
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
          </NativeSelect>
        </FormControl>
      </Grid>
      <Grid item>
        <Button
          style={{ marginTop: "20%" }}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Add task
        </Button>
      </Grid>
    </Grid>
  );
}