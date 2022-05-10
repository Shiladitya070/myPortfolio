import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
import 'animate.css';
import Skills from '../components/Skills';


export default function Home() {
  const dp_link = "https://avatars.githubusercontent.com/u/55788345?v=4"


  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
        <Navbar /> 
      <div className={styles.details}>

        <p className={`animate__animated animate__fadeInRight`}>
          Hi, I'm Shiladitya,<br/>
          Video editor & Coder
          based in west bengal,<br/>India
        </p>
        <div className={styles.common_button}>
          <a href="#skills">Scroll Down</a>
        </div>
      </div>
      <div className={styles.marque}>
        <p>
          Highly passionate about video editing, coding and youtube. Enjoy!
        </p>
      </div>
      <Skills/>
    </div>
  )
}
