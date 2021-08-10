/* eslint-disable react/no-unescaped-entities */
import Head from "next/head"
import NavFrame from "../components/organisms/NavFrame/NavFrame"
import { Box, Grid, Typography } from "@material-ui/core"
import React from "react"
import PSCard from "../components/molecules/PSCard/PSCard"
import PSLink from "../components/atoms/PSLink/PSLink"
import { WEB_APP_URL, CHART_URL, LANDING_URL } from "../core/environments"
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
              title={
                <div>
                  Welcome to the <strong>PseudoCoin App Alpha!</strong>
                </div>
              }
              content={
                <>
                  <Typography paragraph>
                    Take a look around and let us know what you think. We'll be
                    adding features and fixing bugs daily so make sure to check
                    in :)
                  </Typography>

                  <Typography
                    paragraph
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    Learn more about PseudoCoin here:{" "}
                    <div style={{ marginLeft: "6px" }}>
                      <PSLink
                        newTab={true}
                        text={"pseudocoin.io"}
                        withIcon={true}
                        url={LANDING_URL}
                      />
                    </div>
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
                  </Typography>
                </>
              }
              footerContent={
                <PSLink
                  newTab={true}
                  text={"view charts"}
                  withIcon={true}
                  url={CHART_URL}
                />
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
                  </Typography>
                </>
              }
              footerContent={
                <PSLink
                  newTab={false}
                  text={"browse videos"}
                  withIcon={true}
                  url={`${WEB_APP_URL}/videos`} // todo: cleanup
                />
              }
            />
          </Grid>

          <Grid container item xs={4}>
            <PSCard
              title={"PseudoCoin"}
              avatar={<AttachMoney />}
              content={
                <>
                  <Typography paragraph>
                    PseudoCoin holders have access to premium features (coming
                    soon).
                  </Typography>
                </>
              }
              footerContent={
                <PSLink
                  newTab={true}
                  text={"buy PseudoCoin"}
                  withIcon={true}
                  url={`https://pancakeswap.finance/swap`}
                />
              }
            />
          </Grid>
        </Grid>
      </NavFrame>
    </>
  )
}
