import './App.css';
import React, { useState } from 'react';
import Button from './styled/button'

export function TaskDisplay () {

  let startingTodos = ["clean litter", "clean house", "get groceries", "get gas"];
  const [currentState, setTodos] = useState(startingTodos); //[current state, name of function to call] = useState(array of objects to initialize state onto)

  const addTodo = () => {
    let newTodo = document.getElementById("newTodo").value;
    setTodos((curr) => [...curr, newTodo]); // You might also see this as setTodos((curr) => [...curr, newTodo]); where curr is just the current value of state
    document.getElementById("newTodo").value = ""; // Set the input value to an empty string
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    }

  const handleDelete = (index) => {
    setTodos((prevState) => {
      const updatedTodos = [...prevState];
      updatedTodos.splice(index, 1);
      return updatedTodos;
    });
  };

  return (
    <div>
     <ul>
      {currentState.map((toDo, index) => (
        <div className = "toDoRow" key ={index}>
          <li key={toDo}>{toDo}</li>
          <Button onClick={() => handleDelete(index)}>DONE</Button>
        </div>
      ))}
     </ul>
     <form onSubmit={handleSubmit}>
      <label htmlFor="newTodo">New to do?:</label>
      <input type="text" id="newTodo" name="newTodo"></input>
      <Button primary for="newTodo" onClick={addTodo}>Add To Do</Button>
     </form>
    </div>
  );
};

