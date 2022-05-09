import { Avatar, Button } from '@mui/material'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { red } from '@mui/material/colors';
import Navbar from '../components/Navbar';
import 'animate.css';











export default function Home() {
  const dp_link = "https://avatars.githubusercontent.com/u/55788345?v=4"


  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar/>
      <h1 className="animate__animated animate__fadeInRight">
        Hi, I'm Shiladitya,<br />
        Video editor & Coder<br />
        based in west bengal, India
      </h1>

    </div>
  )
}
