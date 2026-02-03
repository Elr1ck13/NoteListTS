import { useState } from 'react';
import { Note } from '../types';

interface NoteProps {
  note: Note;
  onDelete: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
}

export const Notes = ({ note, onDelete, onUpdate }: NoteProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempText, setTempText] = useState(note.text);

  const handleToggleEdit = () => {
    if (isEditing) onUpdate(note.id, tempText);
    setIsEditing(!isEditing);
  };

  return (
    <article className="note-item">
      {isEditing ? (
        <input value={tempText} onChange={(e) => setTempText(e.target.value)} />
      ) : (
        <span>{note.text}</span>
      )}
      <button onClick={handleToggleEdit}>{isEditing ? 'Guardar' : 'Editar'}</button>
      <button onClick={() => onDelete(note.id)}>Borrar</button>
    </article>
  );
};