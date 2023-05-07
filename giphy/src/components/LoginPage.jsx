import React, {useState} from 'react';
import { useUserContext } from '../context/UserContext';
//import getGifs from '../functions/getGifs';
import Button from '../styled/elements/Button.js';
import H1 from '../styled/elements/H1.js';


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUserContext();
  return (
    <div className = "background center margin">
      <H1 className="margin loginForm">Login</H1>
      <form className ="top100">
        <label className="white margin" htmlFor='username'>Username:</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
        />
        <br/>
        <div className = "height25"></div>
        <label className= "white margin" htmlFor='password'>Password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          type='password'
        />
        <br/>
        <div className = "height100"></div>
        <Button
          className="margin"
          disabled={username.length < 4 || password.length < 4}
          onClick={(e) => {
            e.preventDefault();
            setUser({username});
          }}
        >
          Login
        </Button>
      </form>
    </div>
  )
};

export default LoginPage;