// src/components/CreateArea.jsx
import React, { useState } from "react";
import { Box, TextField, Button, Paper, Grow } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    setIsExpanded(false);
    event.preventDefault();
  }

  function expand() {
    setIsExpanded(true);
  }

  return (
    <Box
      component="form"
      onSubmit={submitNote}
      sx={{ display: "flex", justifyContent: "center", mt: 4 }}
    >
      <Paper
        elevation={3}
        sx={{ width: { xs: "90%", sm: "60%", md: "40%" }, p: 2 }}
      >
        {isExpanded && (
          <TextField
            name="title"
            placeholder="Title"
            variant="standard"
            fullWidth
            value={note.title}
            onChange={handleChange}
            InputProps={{ disableUnderline: true }}
            sx={{ mb: 1 }}
          />
        )}
        <TextField
          name="content"
          placeholder="Take a note..."
          variant="standard"
          fullWidth
          multiline
          rows={isExpanded ? 3 : 1}
          value={note.content}
          onChange={handleChange}
          onClick={expand}
          InputProps={{ disableUnderline: true }}
        />
        {isExpanded && (
          <Grow in={true}>
            <Box textAlign="right" mt={1}>
              <Button
                type="submit"
                variant="contained"
                size="small"
                startIcon={<AddIcon />}
              >
                Add
              </Button>
            </Box>
          </Grow>
        )}
      </Paper>
    </Box>
  );
}

export default CreateArea;
