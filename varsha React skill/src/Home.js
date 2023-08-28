import React from 'react';
import bg1 from "./bg.avif";
import style from "./Css/Home.module.css";
function Home() {
  return (
    <>
    <div  >
        <img src={bg1} className={style.brandlogo} />
    </div>
    </>
  )
}

export default Home;