import React from 'react';

export default function Home() {
    const h1Style = {
        textAlign: "center",
        fontSize: "xx-large",
        color: "#301934",
        backgroundColor: '#c8a2c8',
        padding: '1rem'
    };
    const imgStyle={
        display:"block",
        magin:"auto",
        marginLeft:"300px",
        marginTop:"50px"

    }
    const para={
        font:"xx-large",
        fontWeight:"bold"
    }

    return (
        <div>
            <header  style={h1Style}>
            <h1>Welcome to E-commerce</h1>
            </header>
            <img src='https://www.bringitonline.in/uploads/2/2/4/5/22456530/best-fashion-photographer-in-delhi-http-www-bringitonline-in-fashion-photography-html_2_orig.jpg' style={imgStyle} height="500px" width="60%"/>
            <p style={para}>Wide range of Varieties...</p>
            
        </div>
    );
}
