/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {TaskDisplay} from './App';
import {Login} from './Login'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>DOSTUFF</h1>
    <p>the app for your stuff</p>
    <Login />
    <TaskDisplay />
  </React.StrictMode>
);
*/

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { TaskDisplay } from './App';
import { Login } from './Login';
import reportWebVitals from './reportWebVitals';
import { handleLogin } from './Login';
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <React.StrictMode>
      <h1>DOSTUFF</h1>
      <p>the app for your stuff</p>
      
      {!loggedIn ? <Login /> : <TaskDisplay />}
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
