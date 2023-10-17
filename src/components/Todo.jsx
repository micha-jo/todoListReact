import React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Checkbox, FormControlLabel, ListItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ToDo({ todo, setCompletion, deleteTodo }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <ListItem
        key={todo.id}
        className="list"
        sx={{ justifyContent: "space-between" }}
      >
        <FormControlLabel
          label={todo.text}
          control={
            <Checkbox
              onClick={() => setCompletion(todo.id)}
              checked={todo.completed}
              id={todo.id}
            />
          }
        ></FormControlLabel>
        <Button onClick={() => deleteTodo(todo.id)} variant="contained">
          {isMobile ? <DeleteIcon /> : "Supprimer"}
        </Button>
      </ListItem>
    </>
  );
}
