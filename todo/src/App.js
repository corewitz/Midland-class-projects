import './App.css';
import React from 'react';
import {TaskDisplay} from './Taskdisplay';
import {Login} from './Login'

function App () {
  
  return (
    <div>
      <React.StrictMode>
      <Login />
        <TaskDisplay />
      </React.StrictMode>
    </div>
  );
}


export default App;

