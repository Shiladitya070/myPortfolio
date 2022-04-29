import React from 'react'
import styles from '../styles/Home.module.css'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_left}>
      </div>
      <div className={styles.navbar_right}>
        <a href="https://www.youtube.com/channel/UCtLSmg9UXc_MsjNFn_w5bng" target="_blank" rel="noopener noreferrer">Youtube↗</a>
        <a href="https://www.instagram.com/shiladitya_070_/" target="_blank" rel="noopener noreferrer">Instagram↗</a>
        <a href="#youtube" >Contact↗</a>
      </div>
    </div>
  )
}

export default Navbar