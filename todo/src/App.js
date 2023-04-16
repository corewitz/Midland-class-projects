
import './App.css';
import React, { useState } from 'react';
import {TaskDisplay} from './Taskdisplay'
import {Login} from './Login'

function App () {
  const [title, setTitle] = useState("");
  const [username, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <React.StrictMode>
      <Login username = {username} setUserName = {setUserName} title = {title} setTitle = {setTitle} setIsLoggedIn = {setIsLoggedIn} isLoggedIn = {isLoggedIn}/>
      {isLoggedIn && (
      <TaskDisplay />)}
      </React.StrictMode>
    </div>
  );
}


export default App;
