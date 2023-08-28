import React, { useState } from 'react';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    // Perform signup logic here
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupForm;
