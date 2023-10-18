import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

export default function TodoCard({ list }) {
  const path = `/todo/${list.id}`;
  return (
    <Card
      sx={{
        width: "200px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {list.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={path} size="small">
          Ouvrir la liste
        </Button>
      </CardActions>
    </Card>
  );
}
