// src/components/Note.jsx
import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Card
      sx={{
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: 3,
        padding: 2,
        minHeight: 100,
        position: "relative",
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body2">{props.content}</Typography>
        <IconButton
          onClick={handleClick}
          sx={{
            position: "absolute",
            right: 8,
            bottom: 8,
          }}
          aria-label="delete"
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default Note;
