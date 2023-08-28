import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // Perform login logic here
  };

  return (
    <div>
    <h2> <center>Login</center></h2>
    <form onSubmit={handleSubmit}>
      <div>
        <center>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </center>
      </div>
      <div>
        <center>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </center>
      </div>
      <center>
      <button type="submit">Login</button>
      </center>
    </form>
    
  </div>
);
}

export default LoginForm;