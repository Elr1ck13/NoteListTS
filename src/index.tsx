import React from 'react';
import ReactDOM from 'react-dom'; 
import '@styles/index.css';
import { NoteModule } from './components/NoteModule';


ReactDOM.render(
  <React.StrictMode>
    <NoteModule />
  </React.StrictMode>,
  document.getElementById('root')
);