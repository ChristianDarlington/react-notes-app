import './App.css';
import { nanoid } from 'nanoid'
import { useState } from 'react';
import NoteList from './components/NotesLists';
import Search from './components/Search';
 

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

  const deleteNote = (id) =>{
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className='container'>
      <Search />
      <NoteList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
  );
}

export default App;
