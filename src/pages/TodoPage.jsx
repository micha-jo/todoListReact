import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DisplayTodos from "../components/DisplayTodos";
import { Grid } from "@mui/material";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // getTodos(id)
    const todosData = [
      { id: "2", completed: false, text: "cuisiner", todo: "hello" },
    ];
    setTodos([...todosData]);
  }, []);

  return (
    <Grid container justifyContent="center" spacing={2} m={4}>
      <Grid item>
        <DisplayTodos todos={todos} setTodos={setTodos} type="todo" />
      </Grid>
      <Grid item>
        <DisplayTodos todos={todos} setTodos={setTodos} type="completed" />
      </Grid>
    </Grid>
  );
}
