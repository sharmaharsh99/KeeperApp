import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { Box, Grid } from "@mui/material";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      <Box sx={{ padding: 4 }}>
        <Grid container spacing={3}>
          {notes.map((note, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Note
                id={index}
                title={note.title}
                content={note.content}
                onDelete={deleteNote}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default App;
