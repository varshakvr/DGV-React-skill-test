import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#c8a2c8',
    color: '#301934',
    
    padding: '1rem',
    fontWeight:'bold',
    
    marginTop:'560px',
  };

  const copyrightStyle = {
    fontSize: '1rem',
    textAlign: 'center',
    fontWeight:'bold'
  };

  return (
    <footer style={footerStyle}>
        <p>Contact : Ecommerce@gmail.com</p>
      <p style={copyrightStyle}>&copy; 2023 E-Commerce Store</p>
      <p style={copyrightStyle}>All rights reserved.</p>
    </footer>
  );
};

export default Footer;
