import React, { useState, useEffect } from 'react';
import {Container} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import TodoForm from './Components/TodoForm';
import  Todos from './Components/Todos'

const App = ()=>{
  const [todos,setTodos] = useState([]);

  useEffect(()=>{
    const localTodos = localStorage.getItem("todos");
    console.log({localTodos});
    if(localTodos){
      setTodos(JSON.parse(localTodos));
    }
  },[]);

  const addTodos = async todo=>{
    setTodos([...todos,todo])
  }

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

  const markComplete =id=>{
    setTodos(todos.filter(todo=>todo.id!==id));
  };

  return(
    <Container fluid className="mt-5">
      <h1>Todo With Local Storage</h1>
      <Todos todos={todos} markComplete={markComplete}/>
      <TodoForm addTodos={addTodos}/>
    </Container>
  )
}
export default App;