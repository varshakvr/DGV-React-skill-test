import React, { useState } from "react";
import "./Sign.css";

const Sign = () => {
    var [name, setName] = useState("");
    var [email, setEmail] = useState("");
    var [data, setData] = useState([]);
    var handleSubmit = (event) => {
        event.preventDefault();
        var newData = { name, email };
        setData([...data, newData]);
        setName("");
        setEmail("");
    };
    return (
        <div className="whole">
            <form onSubmit={handleSubmit}>
                <div className="full">
                    <span className="tagone"> Name:</span>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <h2 className="tagtwo">E-Mail:</h2>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your e-mail"
                        className="email"
                        required
                    />
                </div>

                <button className="submit">REGISTER</button>
            </form>

            <div className="answer">
                <ul>
                    {data.map((ans, val) => (
                        <li key={val}>
                            <strong className="tagthree">Name:</strong>
                            <span className="ansone">{ans.name}</span>,
                            <strong className="tagfour">Email:</strong>
                            <span className="anstwo">{ans.email}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Sign;