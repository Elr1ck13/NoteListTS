import { useState, useEffect } from 'react';
import { Note } from '../types';

const STORAGE_KEY = 'my_notes_app_v1';

export const useNotes = () => {
  
  const [notes, setNotes] = useState<Note[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      
      if (!saved) return [];
      
      
      const parsedData = JSON.parse(saved);
      
      
      return Array.isArray(parsedData) ? parsedData : [];
    } catch (error) {
      console.error("Error al cargar LocalStorage:", error);
      
      return [];
    }
  });

  
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch (error) {
      console.error("Error al guardar en LocalStorage (posiblemente lleno):", error);
    }
  }, [notes]);

  const addNote = (text: string) => {
    if (!text.trim()) return;
    const newNote: Note = { id: crypto.randomUUID(), text , createdAt: new Date()};
    setNotes((prev) => [...prev, newNote]);
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const updateNote = (id: string, newText: string) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, text: newText } : note))
    );
  };

  return { notes, addNote, deleteNote, updateNote };
};