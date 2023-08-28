import React from 'react';

const Header = () => {
    return (

        <header className="header">
            <h1>Header 👀</h1>
            <nav>

                <ul>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Signup</a></li>
                    <li><a href="/products">Products</a></li>
                </ul>

            </nav>
        </header>

    );
};

export default Header;
