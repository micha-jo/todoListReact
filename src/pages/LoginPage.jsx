import React from "react";
import SignIn from "../components/SignIn";
import { useContext } from "react";
import { authContext } from "../components/Auth";
import { Navigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import Register from "../components/Register";

export default function LoginPage() {
  const user = useContext(authContext);
  return user ? (
    <Navigate to="/todo" />
  ) : (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}
      m={2}
    >
      <Grid item>
        <Typography component="h1" variant="h6">
          La liste de tâches à partager
        </Typography>
      </Grid>
      <Grid item>
        <SignIn />
      </Grid>
      <Grid item>
        <Typography>Vous n'avez pas encore de compte ?</Typography>
      </Grid>
      <Grid item>
        <Register />
      </Grid>
    </Grid>
  );
}
