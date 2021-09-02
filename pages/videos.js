import NavFrame from "../components/organisms/NavFrame/NavFrame"
import PSVideoCard from "../components/molecules/PSVideoCard/PSVideoCard"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography } from "@material-ui/core"
import Head from "next/head"
import React from "react"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    position: "relative",
  },
}))

export default function Home() {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Videos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavFrame page={"Dashboard"}>
        <Typography>PseudoCoin</Typography>

        <br />

        <Grid container spacing={2}>
          <Grid container item xs={12} sm={6} md={3} spacing={1}>
            <PSVideoCard
              title={"What is PseudoCoin?"}
              url={"https://www.youtube.com/embed/IN0TWRCZbgc"}
            />
          </Grid>
          <Grid container item xs={12} sm={6} md={3} spacing={1}>
            <PSVideoCard
              title={"How to Buy and Sell Pseudocoin and Other BSC tokens?"}
              url={"https://www.youtube.com/embed/VbqosA2HvuM"}
            />
          </Grid>
        </Grid>

        <br />

        <Typography>Livesteams</Typography>

        <br />

        <Grid container spacing={2}>
          <Grid container item xs={12} sm={6} md={3} spacing={1}>
            <PSVideoCard
              title={"August 10, 2021 AMA"}
              url={"https://www.youtube.com/embed/GfKeOmIld5M"}
            />
          </Grid>
        </Grid>

        <br />

        <Typography>Tutorials</Typography>

        <br />

        <Grid container spacing={2}>
          <Grid container item xs={12} sm={6} md={3} spacing={1}>
            <PSVideoCard
              title={"Trust Wallet: Introduction To Trust Wallet"}
              url={"https://www.youtube.com/embed/Mi3eeYfeNS0"}
            />
          </Grid>
          <Grid container item xs={12} sm={6} md={3} spacing={1}>
            <PSVideoCard
              title={"Alt Coin Trading: How to Spot a Scam Token"}
              url={"https://www.youtube.com/embed/9opEiMKL0GU"}
            />
          </Grid>
          <Grid container item xs={12} sm={6} md={3} spacing={1}>
            <PSVideoCard
              title={"What are Stablecoins?"}
              url={"https://www.youtube.com/embed/Eqm9bOSOUVs"}
            />
          </Grid>
        </Grid>
      </NavFrame>
    </>
  )
}
