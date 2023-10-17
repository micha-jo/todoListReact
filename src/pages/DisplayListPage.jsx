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
import add from "./../functions/add";
import { getAllLists } from "../functions/get";

export default function DisplayListPage() {
  const [lists, setLists] = useState([]);
  const [openInput, setOpenInput] = useState(false);
  const [newList, setNewList] = useState("");
  const user = useContext(authContext);

  const listsData = [
    {
      id: "hello",
      title: "Cuisine",
      users: ["JpeZrzFrnFUl5kuAQXTC8zFlhRD3"],
    },
  ];

  useEffect(() => {
    getAllLists("todo", user.uid).then((data) => {
      setLists(data);
    });
  }, []);

  function handleOpenInput() {
    setOpenInput(!openInput);
  }

  function handleInputChange(e) {
    setNewList(e.target.value);
  }

  function createNewTodolist(e) {
    const newTodo = {
      title: newList,
      users: [user.uid],
    };
    add(newTodo, "todo").then((data) => {
      const updateList = { ...newTodo, id: data };
      setLists([...lists, updateList]);
    });
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
          <CardContent>
            <Typography variant="h5" component="div" onClick={handleOpenInput}>
              Créer une nouvelle liste
            </Typography>
          </CardContent>
          {openInput ? (
            <CardActions>
              <AddIcon onClick={handleOpenInput} />
            </CardActions>
          ) : (
            <CardActions>
              <Input onChange={handleInputChange} value={newList} />
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
