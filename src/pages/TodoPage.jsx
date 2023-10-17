import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DisplayTodos from "../components/DisplayTodos";
import { Grid } from "@mui/material";
import { getTodoTask } from "../functions/get";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // const todosData = [
    //   { id: "2", completed: false, text: "cuisiner", todo: "hello" },
    // ];
    getTodoTask('DDW5fDqYvZicsvZZs3Kl').then(data=> setTodos(data))
    //setTodos([...todosData]);
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
