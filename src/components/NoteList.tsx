import { Notes } from './Notes';
import { Note } from '../types';

interface NoteListProps {
  notes: Note[];
  onDeleteNote: (id: string) => void;
  onUpdateNote: (id: string, text: string) => void;
}

export const NoteList = ({ notes, onDeleteNote, onUpdateNote }: NoteListProps) => (
  <section className="NoteList">
    {notes.map((note) => (
      <Notes 
        key={note.id} 
        note={note} 
        onDelete={onDeleteNote} 
        onUpdate={onUpdateNote} 
      />
    ))}
  </section>
);