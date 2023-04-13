
import React, { useState } from 'react';
import Button from './styled/button'




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
  
  function handleLogin () {
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
          <label htmlFor="title">Title of your list:</label>
          <input type="title" id="title" name="title" onChange={(e) => handleTitle(e.target.value)}></input>
          <br></br>
          <Button primary type="button" value="Login" onClick={() => handleLogin()}>Login</Button>
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
 let setIsLoggedIn = false;
export const handleLogin = () => {
  setIsLoggedIn(true);
};
