// src/App.js
import React, { useState, useEffect } from 'react';
import Note from './Note';
import './App.css';

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [important, setImportant] = useState(false);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (title.trim() === '' || description.trim() === '') {
      alert('Añade un Título o una Descripcion a la Nota!');
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      description,
      important,
      rotate: Math.random() * 10 - 5 // Añadir rotación aleatoria
    };

    setNotes([...notes, newNote]);
    setTitle('');
    setDescription('');
    setImportant(false);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="App">
      <h1>Post It Simulator!</h1>
      <div className="note-form">
        <label>
          Título:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Descripción:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Importante:
          <input
            type="checkbox"
            checked={important}
            onChange={(e) => setImportant(e.target.checked)}
          />
        </label>
        <button onClick={addNote}>AGREGAR</button>
      </div>
      <div className="notes-container">
        {notes.map((note) => (
          <Note key={note.id} note={note} onDelete={deleteNote} />
        ))}
      </div>
    </div>
  );
}

export default App;