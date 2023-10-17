import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Card,
  Grid,
  CardContent,
  Typography,
  CardActions,
  Input,
  Button,
} from "@mui/material";
import TodoCard from "../components/TodoCard";
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import { authContext } from "../components/Auth";

export default function DisplayListPage() {
  const [lists, setLists] = useState([]);
  const [openInput, setOpenInput] = useState(false);
  const user = useContext(authContext);

  const listsData = [
    {
      id: "hello",
      title: "Cuisine",
      users: ["JpeZrzFrnFUl5kuAQXTC8zFlhRD3"],
    },
  ];

  // getTodos qui renvoit une liste de todos qu'on enregistre dans un state
  useEffect(() => {
    // getLists
    setLists(listsData);
  }, []);

  function handleOpenInput() {
    setOpenInput(!openInput);
  }

  function createNewTodolist(e) {
    // // addTodo ({
    //   title: ""
    //   users: []
    // }
  }

  return (
    <Grid container m={6} spacing={2}>
      {lists.map((list) => (
        <Grid item key={list.id}>
          <TodoCard list={list} />
        </Grid>
      ))}
      <Grid item>
        <Card>
          <CardContent onClick={handleOpenInput}>
            <Typography variant="h5" component="div">
              Créer une nouvelle liste
            </Typography>
          </CardContent>
          {openInput ? (
            <CardActions>
              <AddIcon onClick={handleOpenInput} />
            </CardActions>
          ) : (
            <CardActions>
              <Input />
              <Button variant="contained" onClick={createNewTodolist}>
                Créer
              </Button>
            </CardActions>
          )}
        </Card>
      </Grid>
    </Grid>
  );
}
