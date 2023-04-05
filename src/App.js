import React, { useState } from "react";
import Header from "./components/Header"
import ChoreArea from "./components/ChoreArea";
import Note from "./components/Note";
import Footer from "./components/Footer";

function App() {
  const [chores, setChores] = useState([])

  function addChore(newChore) {
    setChores(prevChores => {
      return [...prevChores, newChore]
    })
  }

  function deleteChore(id) {
    setChores(prevChores => {
      return prevChores.filter((choreItem, index) => {
        return index !== id
      })
    })
  }

  return (
    <div className="App">
      <Header />
      <ChoreArea onAdd={addChore}/>
      {chores.map((choreItem, index) => {
        return <Note 
        key={index}
        id={index}
        title={choreItem.title}
        content={choreItem.content}
        onDelete={deleteChore}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
