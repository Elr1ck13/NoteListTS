import { useState } from 'react';
import { NoteList } from './NoteList';
import { useNotes } from '../hooks/useNotes';

export const NoteModule = () => {
  const [inputValue, setInputValue] = useState("");
  const { notes, addNote, deleteNote, updateNote } = useNotes();

  const handleAdd = () => {
    addNote(inputValue);
    setInputValue("");
  };

  return (
    <div className="NoteModule">
      <h1>Mis Notas</h1>
      <div className="input-group">
        <input 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Escribe una nota..."
        />
        <button onClick={handleAdd}>Agregar</button>
      </div>
      
      <NoteList 
        notes={notes} 
        onDeleteNote={deleteNote} 
        onUpdateNote={updateNote} 
      />
    </div>
  );
};