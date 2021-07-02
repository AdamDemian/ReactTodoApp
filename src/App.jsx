import React, { useState } from "react";
import './App.css';
// Componets
import Form from './componets/Form'; 
import TodoList from "./componets/TodoList"

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Todo List {setInputText}</h1>
      </header>
      <Form setInputText={setInputText} />
      <TodoList /> 
    </div>
  );
}

export default App;
