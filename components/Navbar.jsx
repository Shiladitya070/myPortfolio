import { Button } from '@mui/material'
import React, { useState } from 'react'
import styles from '../styles/navbar.module.css'
import { Avatar } from '@mui/material'
import { red } from '@mui/material/colors';




function Navbar() {
  const dp_link = "https://avatars.githubusercontent.com/u/55788345?v=4"
  const [active, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!active); 
    // console.log("😀", active);
   };



  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href="#" class={styles.nav_logo}>
        <Avatar sx={  { border:2, width: 80, height:80}}  src={dp_link}>S</Avatar>
        </a>
        <ul class={`${styles.nav_menu} ${active ? styles.active : ""}`}>
          <li className={styles.nav_item}>
            <a href="#" className={styles.nav_link}>Services</a>
          </li>
          <li className={styles.nav_item}>
            <a href="#" className={styles.nav_link}>Blog</a>
          </li>
          <li className={styles.nav_item}>
            <a href="#" className={styles.nav_link}>About</a>
          </li>
          <li className={styles.nav_item}>
            <a href="#" className={styles.nav_link}>Contact</a>
          </li>
        </ul>
        <div className={`${styles.hamburger} ${active ? styles.active : ""}`} onClick={ToggleClass}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
    </header>

  )
}

export default Navbar