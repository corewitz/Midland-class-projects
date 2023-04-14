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

//import Button from './styled/button'



/*THIS CODE ENDED UP NOT WORKING LIKE EXPECTED
import './App.css';
import React, { useState } from 'react';
import TaskDisplay from './Taskdisplay';
import Login from './Login.js'

export function App () {
  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <React.StrictMode>
      <h1>DOSTUFF</h1>
      <p>the app for your stuff</p>
      
      {!loggedIn ? <Login /> : <TaskDisplay />}
    </React.StrictMode>
  );
};
*/
