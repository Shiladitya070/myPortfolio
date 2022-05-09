import { Button, IconButton } from '@mui/material'
import React, { useState } from 'react'
import styles from '../styles/navbar.module.css'
import { Avatar } from '@mui/material'
import { red } from '@mui/material/colors';
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai';
import 'animate.css';


function Navbar() {
  const dp_link = "https://avatars.githubusercontent.com/u/55788345?v=4"
  const [active, setActive] = useState(false);
  const ToggleClass = () => {
    setActive(!active); 
    console.log("😀", active);
   };



  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href="#" class={styles.nav_logo}>
        <Avatar sx={  { border:2, width: 60, height:60}} className="animate__animated animate__rubberBand"  src={dp_link}>S</Avatar>
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
        <div className={`${styles.hamburger} ${active ? "" : styles.active}`} onClick={ToggleClass}>
          <IconButton sx={{ color: red[500] }} size="large">
            {active ?  <AiFillCloseCircle/> : <AiOutlineMenu/>}
          </IconButton> 
        </div>


      </nav>
    </header>

  )
}

export default Navbar