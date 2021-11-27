import React, {useState, useEffect} from "react";
import { Container } from "reactstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Todos from "./Components/Todos";
import TodoForm from "./Components/TodoForm";

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if(localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  },[]);

  const addTodos = (todo) => {
    setTodos([...todos, todo]);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

  const markComplete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <Container fluid>
      <h1>Todo App with localStorage</h1>
      <Todos todos={todos} markComplete={markComplete} />
      <TodoForm addTodos={addTodos} />
    </Container>
  );
}

export default App;
