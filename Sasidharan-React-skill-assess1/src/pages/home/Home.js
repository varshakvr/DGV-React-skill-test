import React from 'react';
import styles from "./Home.module.css";
import { Link } from 'react-router-dom';
import AboutImg from"../../assets/wallpaper.PNG";
import Dinning from"./dining.jpg";
import Fine from"../../assets/fine.jpg"
import Dine from "./dine.jpg";
import FeedBg from "./givebg.jpeg";

function Home() {
  return (
    <>
        <div className={styles.header}>
          <h2 className={styles.mainline}>Unveil a World of Shopping Delights –<br></br> Where Clicks Meet Convenience!</h2>   
          <h4 className={styles.subline}>Experience shopping reimagined: <br></br>where endless choices meet the ease of a click, all on one dazzling platform.</h4>
          <Link className={styles.button} to='/product'>Order Now</Link>
        </div>
    <div className={styles.aboutus}>
      <h2>About Us</h2>
      <div className={styles.aboutmaindiv}>
        <div className={styles.aboutimg}>
          <img src={AboutImg} />
        </div>
        
        <div className={styles.aboutdiv}>
          <p className={styles.aboutp}> Our website redefines shopping by offering a diverse array of products and services, catering to a wide range of preferences and needs. With a user-centric approach, we provide secure transactions, personalized recommendations, and a seamless interface that enables customers from various cultures and regions to engage effortlessly. Our platform embodies the modern shopping experience, where anyone, anywhere can discover, purchase, and connect, contributing to the vibrant tapestry of international commerce.</p>
          <Link className={styles.button} to="/about">About us</Link>
        </div>
      </div>
    </div>
    <div className={styles.parallex1}>
      
    </div>
    <div className={styles.table}>
      <p>-Purchase-</p>
      <h1>Order From Wide Variety of Collections</h1>
      <div className={styles.tableimg}>
        <img src={Dine} />
        <img src={Fine} />
        <img src={Dinning} />
      </div>
    </div>
        <div className={styles.parallex2}>
    </div>
    <div className={styles.feed}>
      <h1>Your Feedback is Welcomed</h1>
      <div className={styles.feedmaindiv}>
        <div className={styles.feedimg}>
          <img src={FeedBg} className='' />
        </div>
      <form>
        <div>
          <label htmlFor='name'>Name</label>
          <input id='name' placeholder='Enter Your Name'/>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input id='email' placeholder='Enter Your Email'/>
        </div>
        <div>
          <label htmlFor='subject'>Subject</label>
          <input id='subject' placeholder='Enter Your Subject'/>
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea id='message' placeholder='Enter Your Message' />
        </div>
        <button type='submit'>Submit</button>
      </form>
      </div>
    </div>
    </>
  )
}

export default Home