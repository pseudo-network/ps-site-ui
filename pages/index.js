import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavFrame from "../components/organisms/NavFrame/NavFrame"

export default function Home() {
  return <NavFrame page={"Home"}>
        <div>
      home!
    </div>
  </NavFrame>
  
}
