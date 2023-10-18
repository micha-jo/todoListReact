import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DisplayTodos from "../components/DisplayTodos";
import { Grid } from "@mui/material";
import { getTodoTask } from "../functions/get";
import AddToTodo from "../components/AddTodo";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getTodoTask(id).then((data) => setTodos(data));
  }, []);

  return (
    <Grid
      container
      spacing={5}
      direction="column"
      justifyContent="center"
      sx={{ marginTop: "20px" }}
    >
      <Grid item sx={{ xs: { width: "300px" } }}>
        <AddToTodo todos={todos} setTodos={setTodos} listId={id} />
      </Grid>
      <Grid
        container
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        sx={{ marginTop: "20px", paddingLeft: { xs: "40px" } }}
      >
        <Grid item sx={{ marginTop: "20px" }}>
          <DisplayTodos todos={todos} setTodos={setTodos} type="todo" />
        </Grid>
        <Grid item sx={{ marginTop: "20px" }}>
          <DisplayTodos todos={todos} setTodos={setTodos} type="completed" />
        </Grid>
      </Grid>
    </Grid>
  );
}
