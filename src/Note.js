// src/Note.js
import React from 'react';
import './Note';

function Note({ note, onDelete }) {
  return (
    <div
      className={`note ${note.important ? 'important' : ''}`}
      style={{ transform: `rotate(${note.rotate}deg)` }}
    >
      <h2>{note.title}</h2>
      <p>{note.description}</p>
      <button className="delete-button" onClick={() => onDelete(note.id)}>
        Eliminar
      </button>
    </div>
  );
}

export default Note;