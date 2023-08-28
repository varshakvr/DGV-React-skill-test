import React from "react";
function Login() {
    return (
        <div className="full">
            <h1 className="topic">Login 🙌</h1>
            <h1 className="fname">Email</h1>
            <input type="email" className="text" placeholder="Email" required />
            <h1 className="fname">Password</h1>
            <input type="password" className="text" placeholder="Password" required />
            <h4 className="please">Please check the Password</h4>
            <button className="submit">Login</button>
        </div>
    );
}

export default Login;