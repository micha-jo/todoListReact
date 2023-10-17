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
      justifyContent="center"
      spacing={2}
      m={4}
      direction="column"
    >
      <Grid item>
        <AddToTodo todos={todos} setTodos={setTodos} listId={id} />
      </Grid>
      <Grid container direction="row" justifyContent="center">
        <Grid item>
          <DisplayTodos todos={todos} setTodos={setTodos} type="todo" />
        </Grid>
        <Grid item>
          <DisplayTodos todos={todos} setTodos={setTodos} type="completed" />
        </Grid>
      </Grid>
    </Grid>
  );
}
