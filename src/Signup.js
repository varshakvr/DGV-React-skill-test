import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {
        // Handle signup logic here
    };

    return (
        <div className="full">
            <h1 className="topic">Sign-up 🙌</h1>
            <h1 className="fname">First Name</h1>
            <input type="text" className="text" placeholder="First Name" required />
            <h4 className="please">Please check the First Name</h4>
            <h1 className="fname">Last Name</h1>
            <input type="text" className="text" placeholder="Last Name" required />
            <h4 className="please">Please check the Last Name</h4>
            <h1 className="fname">Email</h1>
            <input type="email" className="text" placeholder="Email" required />
            <h1 className="fname">Password</h1>
            <input type="password" className="text" placeholder="Password" required />
            <h4 className="please">Please check the Password</h4>
            <button className="submit">Sign-up</button>
        </div>
    );
}

export default Signup;
