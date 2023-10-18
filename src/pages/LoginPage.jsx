import React from "react";
import SignIn from "../components/SignIn";
import { useContext } from "react";
import { authContext } from "../components/Auth";
import { Navigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import Register from "../components/Register";
import { useState } from "react";

export default function LoginPage() {
  const [hasAccount, setHasAccount] = useState(true);
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
      m={{ sx: 0, md: 2 }}
    >
      <Grid item>
        <Typography component="h1" variant="h6">
          La liste de tâches à partager
        </Typography>
      </Grid>
      {hasAccount ? (
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <SignIn />
          <Typography
            sx={{
              textAlign: "center",
            }}
          >
            Vous n'avez pas encore de compte ? Inscrivez-vous{" "}
            <Typography
              onClick={() => setHasAccount(false)}
              sx={{ textDecoration: "underline" }}
              component="span"
            >
              ici
            </Typography>
          </Typography>
        </Grid>
      ) : (
        <Grid item justifyContent="center" alignItems="center">
          <Register />
          <Typography sx={{ textAlign: "center" }}>
            Vous avez déjà un compte ? Connectez-vous{" "}
            <Typography
              component="span"
              onClick={() => setHasAccount(true)}
              sx={{ textDecoration: "underline" }}
            >
              ici
            </Typography>
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}
