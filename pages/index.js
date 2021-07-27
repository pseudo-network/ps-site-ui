import Head from "next/head"
import NavFrame from "../components/organisms/NavFrame/NavFrame"
import { Box, Grid, Typography } from "@material-ui/core"
import React from "react"
import PSCard from "../components/molecules/PSCard/PSCard"
import PSLink from "../components/atoms/PSLink/PSLink"
import { CHART_BASE_URL } from "../core/environments"
import { Assessment, Language, Videocam, AttachMoney } from "@material-ui/icons"

export default function Home() {
  return (
    <>
      <Head>
        <title>PseudoCoin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavFrame page={"Home"}>
        <Grid container spacing={3}>
          <Grid container item xs={12}>
            <PSCard
              title={"Welcome to the PseudoCoin Network"}
              content={
                <>
                  <Typography paragraph>
                    The PseudoCoin Network exists to offer the absolute best
                    resource for crypto investors. A community driven platform
                    that responds and evolves with the ever changing needs of
                    investors in the crypto space by providing tools to inform
                    and empower the people.{" "}
                  </Typography>
                </>
              }
            />
          </Grid>
        </Grid>

        <br />
        <Grid container spacing={3}>
          <Grid container item xs={4}>
            <PSCard
              title={"Charts"}
              avatar={<Assessment />}
              content={
                <>
                  <Typography paragraph>
                    Search any BSC token that has liquidity on PancakeSwap with
                    our free Chart tool.
                    <br />
                    <PSLink
                      newTab={true}
                      text={"view charts"}
                      withIcon={true}
                      url={CHART_BASE_URL}
                    />
                  </Typography>
                </>
              }
            />
          </Grid>

          <Grid container item xs={4}>
            <PSCard
              title={"Videos"}
              avatar={<Videocam />}
              content={
                <>
                  <Typography paragraph>
                    Search through our collection of videos ranging from
                    informational videos about Pseudo Coin and tutorials.
                    <br />
                    <PSLink
                      newTab={true}
                      text={"browse videos"}
                      withIcon={true}
                      url={CHART_BASE_URL}
                    />
                  </Typography>
                </>
              }
            />
          </Grid>

          <Grid container item xs={4}>
            <PSCard
              title={"Premium"}
              avatar={<AttachMoney />}
              content={
                <>
                  <Typography paragraph>
                    Premium features coming soon!
                  </Typography>
                </>
              }
            />
          </Grid>
        </Grid>
      </NavFrame>
    </>
  )
}
