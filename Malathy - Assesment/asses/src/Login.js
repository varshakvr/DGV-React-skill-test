import React, { useState } from 'react';
import './Login.css'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        
        if (username === 'admin' && password === 'password') {
            setLoggedIn(true);
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
            {loggedIn ? (
                <p>Welcome, {username}!</p>
            ) : (
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
};

export default Login;
