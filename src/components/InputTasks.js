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
import allActions from "../actions/index";
const colorsList = require("../colors.json");

export default function InputTasks() {
  const [Tasks, setTasks] = useState({
    task: "",
    color: "",
    id: "",
  });

  const handleChange = (e) => {
    setTasks({ ...Tasks, [e.target.name]: e.target.value });
  };
  const [colors, setColors] = useState(colorsList);
  const handleChangeColor = async (e) => {
    setTasks({ ...Tasks, color: e.target.value });
    await dispatch(allActions.SelectedColor(e.target.value));
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    if (Tasks.color === "") {
      alert("Please Select a Colour!");
    } else if (Tasks.task.length === 0) {
      alert("Please Enter Task!");
    } else {
      let color = Tasks.color;
      color = color.substring(1);
      const FilteredColors = colors.filter((c) => {
        console.log(color, c.hexCode);
        return c.hexCode !== color;
      });
      dispatch(
        allActions.AddTask({
          task: Tasks.task,
          color: Tasks.color,
          id: uuidv4(),
        })
      );
      setColors(FilteredColors);
      setTasks({ task: "", color: "", id: "" });
    }
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        marginTop: theme.spacing(3),
      },
    },

    btn: {
      marginTop: theme.spacing(1),
      width: "100%",
    },
  }));

  const classes = useStyles();
  return (
    <Grid container className={classes.root} xs={8} direction="row">
      <Grid item xs={12} md={8}>
        <form noValidate autoComplete="off">
          <TextField
            name="task"
            id="standard-basic"
            onChange={handleChange}
            label="Enter Task"
            value={Tasks.task}
          />
        </form>
      </Grid>
      <Grid item xs={4}>
        <FormControl>
          <InputLabel htmlFor="demo-customized-select-native">
            Select color
          </InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            name="color"
            onChange={handleChangeColor}
            value={Tasks.color}
          >
            <option aria-label="gray" value="gray" />
            {colors.map((color) => {
              return <option value={"#" + color.hexCode}>{color.name}</option>;
            })}
          </NativeSelect>
        </FormControl>
      </Grid>
      <Grid xs={12} item>
        <Button
          className={classes.btn}
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
