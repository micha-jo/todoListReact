import { useState } from "react";
import React from "react";
import { Grid, Input } from "@mui/material";
import Button from "@mui/material/Button";
import add from "./../functions/add";

export default function AddToTodo({ setTodos, todos, listId }) {
  const [newTodo, setNewTodo] = useState("");

  function onInputChange(e) {
    setNewTodo(e.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addTodo();
    }
  }

  function addTodo() {
    if (newTodo !== "") {
      const todoObject = {
        completed: false,
        text: newTodo,
        todo: listId,
      };
      add(todoObject, "task").then((data) => {
        const updatedTask = { ...todoObject, id: data };
        setTodos([...todos, updatedTask]);
      });
      setNewTodo("");
    }
  }
  return (
    <Grid
      container
      mt={2}
      direction={{ xs: "column", sm: "row" }}
      sx={{ justifyContent: "center" }}
      spacing={4}
    >
      <Grid item xs={2}>
        <Input
          type="text"
          value={newTodo}
          onChange={onInputChange}
          onKeyDown={handleKeyDown}
          sx={{ width: "100%s" }}
        />
      </Grid>
      <Grid item xs={3}>
        <Button onClick={addTodo} variant="contained">
          Ajouter à la liste
        </Button>
      </Grid>
    </Grid>
  );
}
