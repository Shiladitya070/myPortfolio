import { Avatar } from '@mui/material'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { red } from '@mui/material/colors';
import Navbar from '../components/Navbar';

export default function Home() {
  const dp_link = "https://avatars.githubusercontent.com/u/55788345?v=4"


  

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.index}>
        <Navbar/>
        <div className={styles.details}>
          <Avatar sx={{ boxShadow: 10, border: 10, borderColor: red[10
          ],  width: 200, height:200, margin:10 }} className={styles.glow} src={dp_link}>N</Avatar>
          <h1>Hi, I'm Shiladitya,<br /> Video editor & Coder <br />based in west bengal, India</h1>
        </div>
      </div>
      <div className={styles.wave}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" style={{fill:"#202020"}}></path>
        </svg>
      </div>

      <div id="youtube" className={styles.youtube}>
        Youtube
      </div>

    </div>
  )
}
