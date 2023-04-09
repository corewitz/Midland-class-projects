import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export function Login () {

  let username = "";
  let title = "";

const handleUserName = (value) => {
  username = value;
  console.log(username)
}

const handleTitle = (value) => {
  title = value;
  console.log(title);
}

  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" onChange={(e) => handleUserName(e.target.value)}></input>
      <br></br>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password"></input>
      <br></br>
      <label htmlFor="title">Title:</label>
      <input type="title" id="title" name="title" onChange={(e) => handleTitle(e.target.value)}></input>
      <br></br>
      <input type="button" value="Login"></input>
    </form>
  )
}
/* //THIS WAS BEFORE WE ADDED STATE
export function TaskDisplay () {
  let toDos = ["cook", "clean", "get groceries", "pay bills"];
  console.log(toDos);
  function addTodo () {
  let inputValue = document.getElementById("newTodo").value;
  console.log(inputValue);
  toDos.push(inputValue);
  console.log(toDos);
  }

  return (
    <div>
     <ul>
      {toDos.map((toDo) => (
        <li key={toDo}>{toDo}</li>  
      ))}
     </ul>
     <form>
      <label htmlFor="newTodo">New to do?:</label>
      <input type="text" id="newTodo" name="newTodo"></input>
      <input htmlFor="newTodo" type="button" value="Add To Do" onClick={addTodo}></input>
     </form>
    </div>
  );
}

*/

export function TaskDisplay () {
  let startingTodos = ["clean litter", "clean house", "get groceries", "get gas"];
  const [currentState, setTodos] = useState(startingTodos); //[current state, name of function to call] = useState(array of objects to initialize state onto)
  const addTodo = () => {
    let newTodo = document.getElementById("newTodo").value;
    setTodos((curr) => [...curr, newTodo]); // You might also see this as setTodos((curr) => [...curr, newTodo]); where curr is just the current value of state
    console.log(currentState);
  };

  return (
    <div>
     <ul>
      {currentState.map((toDo) => (
        <li key={toDo}>{toDo}</li>  
      ))}
     </ul>
     <form>
      <label htmlFor="newTodo">New to do?:</label>
      <input type="text" id="newTodo" name="newTodo"></input>
      <input htmlFor="newTodo" type="button" value="Add To Do" onClick={addTodo}></input>
     </form>
    </div>
  );
};
//export default Todo;




