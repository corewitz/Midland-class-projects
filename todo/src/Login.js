
import React from 'react';
import Button from './styled/button'
import './App.css';
export function Login ({username, setUserName, isLoggedIn, setTitle, setIsLoggedIn, title}) {

  const handleUserName = (value) => {
    setUserName(value);
    console.log(username)
  }
  
  const handleTitle = (value) => {
    setTitle(value);
  }

  
function handleLogin () {
    setIsLoggedIn(true);
  }

  return (
    <div>
      {!isLoggedIn && (
        <form className="login">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" onChange={(e) => handleUserName(e.target.value)}></input>
          <br></br>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"></input>
          <br></br>
          <label htmlFor="title">Title of your list:</label>
          <input type="title" id="title" name="title" onChange={(e) => handleTitle(e.target.value)}></input>
          <br></br>
          <Button primary type="button" value="Login" onClick={() => handleLogin()}>Login</Button>
        </form>
      )}
      {isLoggedIn && (
        <>
        <p className ="greeting">Welcome Back {username}! Lets do some STUFF!</p>
          <p className = "greeting">Title: {title}</p>
        </>
      )}
    </div>
  )
}

