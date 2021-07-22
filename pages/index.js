import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import NavFrame from "../components/organisms/NavFrame/NavFrame"
import { Box, Typography } from "@material-ui/core"
import React from "react"

export default function Home() {
  return (
    <NavFrame page={"Home"}>
      <div>home!</div>
    </NavFrame>
  )
  // if (false) {
  //   return (
  //     <NavFrame page={"Home"}>
  //       <div>
  //         home!
  //       </div>
  //     </NavFrame>
  //   )
  // } else {
  //   return (
  //     <Box
  //       display={'flex'}
  //       style={{
  //         backgroundColor: '#fff',
  //         color: '#fff',
  //         width: '100vw',
  //         height: '100vh',
  //       }}
  //       alignItems={'center'}
  //       justifyContent={'center'}
  //       flexDirection={'column'}
  //     >
  //       <img src={'/gifs/ps.gif'} alt={'loading gif'} />
  //       <Typography variant={'h3'}>Loading</Typography>
  //     </Box>
  //   )
  // }
}
