/*

import React, { useState } from 'react';

export function Login () {


  
  const [title, setTitle] = useState("");
  const [username, setUserName] = useState("");
  
  const handleUserName = (value) => {
    setUserName(value);
    console.log(username)
  }
  
  const handleTitle = (value) => {
    setTitle(value);
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
      <input type="button" value="Login" onClick={(e) => handleUserName(e.target.value)}></input>
      <p>{title}</p>
      <p>{username}</p>

    </form>
  )
}

*/
/*
import React, { useState } from 'react';

export function Login () {
  const [title, setTitle] = useState("");
  const [username, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUserName = (value) => {
    setUserName(value);
    console.log(username)
  }
  
  const handleTitle = (value) => {
    setTitle(value);
    console.log(title);
  }
  
  const handleLogin = () => {
    setIsLoggedIn(true);
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
      <input type="button" value="Login" onClick={() => handleLogin()}></input>
      {isLoggedIn && (
        <>
          <p>{title}</p>
          <p>{username}</p>
        </>
      )}
    </form>
  )
}
*/
import React, { useState } from 'react';

export function Login () {
  const [title, setTitle] = useState("");
  const [username, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUserName = (value) => {
    setUserName(value);
    console.log(username)
  }
  
  const handleTitle = (value) => {
    setTitle(value);
    console.log(title);
  }
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  return (
    <div>
      {!isLoggedIn && (
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
          <input type="button" value="Login" onClick={() => handleLogin()}></input>
        </form>
      )}
      {isLoggedIn && (
        <>
        <p>Welcome Back {username}! Lets do some STUFF!</p>
          <p>Title:{title}</p>
        </>
      )}
    </div>
  )
}
