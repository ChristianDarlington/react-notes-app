import './App.css';
import { nanoid } from 'nanoid'
import { useState } from 'react';
import NoteList from './components/NotesLists';
 

function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note',
      date: '09/01/2022'
    },
    {
      id: nanoid(),
      text: 'This is my second note',
      date: '09/05/2022'
    },
    {
      id: nanoid(),
      text: 'This is my third note',
      date: '09/10/2022'
    }
    
  ]) 

  const addNote = (text) =>{
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  return (
    <div className='container'>
      <NoteList notes={notes} handleAddNote={addNote}/>
    </div>
  );
}

export default App;
