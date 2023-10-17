import { Grid, Button, Input } from "@mui/material";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePass(e) {
    setPass(e.target.value);
  }

  function register(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <Grid
      container
      sx={{ width: "100%" }}
      justifyContent="center"
      alignItems="center"
      direction="column"
      spacing={2}
    >
      <Grid item>
        <Input
          type="text"
          onChange={handleEmail}
          value={email}
          sx={{ border: "solid" }}
        />
      </Grid>
      <Grid item>
        <Input
          type="text"
          onChange={handlePass}
          value={pass}
          sx={{ border: "solid" }}
        />
      </Grid>
      <Grid item>
        <Button type="submit" onClick={register}>
          S'enregistrer
        </Button>
      </Grid>
    </Grid>
  );
}
