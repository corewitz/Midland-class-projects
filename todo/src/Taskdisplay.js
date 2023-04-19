
import React, { useState, useEffect } from 'react';
import Button from './styled/button'
import Checkybox from './styled/checkbox'

export function TaskDisplay() {

  let startingTodos = ["clean litter", "clean house", "get groceries", "get gas"];
  const [currentState, setTodos] = useState(startingTodos);

  const [mostRecentTask, setMostRecentTask] = useState(null);
  
  useEffect(() => {
    const mostRecent = currentState[currentState.length - 1];
    setMostRecentTask(mostRecent); //callback function as first argument
  }, [currentState]); // second argument is array of dependencies

  const [inputLength, setInputLength] = useState("");

  const addTodo = () => {
    let newTodo = document.getElementById("newTodo").value;
    setTodos((curr) => [...curr, newTodo]);
    document.getElementById("newTodo").value = "";
    setInputLength(0);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleInputChange = (event) => {
    setInputLength(event.target.value.length);
    console.log("render");
    
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
      { mostRecentTask && (
        <div>
          <h3> Most Recent Task: {mostRecentTask}</h3>
        </div>
      )}
      <ul>
        {currentState.map((toDo, index) => (
          <div className="toDoRow" key={index}>
            <li className="listitem" key={toDo}>{toDo}</li>
            <Checkybox />
            <Button onClick={() => handleDelete(index)}>DONE</Button>
          </div>
        ))}
      </ul>
      <form className="newtodo" onSubmit={handleSubmit}>
        <label htmlFor="newTodo">New to do?:</label>
        <input 
          type="text" id="newTodo" name="newTodo" 
          onChange={handleInputChange}
        ></input>
        <p>Input length: {inputLength}</p>
        <Button primary htmlFor="newTodo" onClick={addTodo}>Add To Do</Button>
      </form>
    </div>
  );
};
