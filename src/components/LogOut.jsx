import { Button } from "@mui/material";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function LogOut() {
  return (
    <Button
      sx={{ textDecoration: "none", color: "white" }}
      onClick={() => signOut(auth)}
    >
      Se déconnecter
    </Button>
  );
}
