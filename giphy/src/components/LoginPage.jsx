import React, {useState} from 'react';
import { useUserContext } from '../context/UserContext';
//import getGifs from '../functions/getGifs';
import Button from '../styled/elements/Button.js';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUserContext();
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor='username'>Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
        />
        <label htmlFor='password'>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          type='password'
        />
        <Button primary
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