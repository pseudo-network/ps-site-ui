import NavFrame from "../components/organisms/NavFrame/NavFrame"
import PSVideoCard from "../components/atoms/PSVideoCard/PSVideoCard"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography } from "@material-ui/core"

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
    <NavFrame page={"Dashboard"}>
      <Typography>Pseudocoin</Typography>

      <br />

      <Grid container spacing={2}>
        <Grid container item xs={12} sm={6} md={3} spacing={1}>
          <PSVideoCard
            title={"What is PseudoCoin?"}
            url={"https://www.youtube.com/embed/8gCD_ltwCsw"}
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
            url={"https://www.youtube.com/embed/aqtOIKNlLIc"}
          />
        </Grid>
        <Grid container item xs={12} sm={6} md={3} spacing={1}>
          <PSVideoCard
            title={"Trust Wallet: How to Install, Create/Import Wallet"}
            url={"https://www.youtube.com/embed/aCe9N8Amkvs"}
          />
        </Grid>
        <Grid container item xs={12} sm={6} md={3} spacing={1}>
          <PSVideoCard
            title={"How to Set up MetaMask Wallet"}
            url={"https://www.youtube.com/embed/hAqpb7aNSt0"}
          />
        </Grid>
        <Grid container item xs={12} sm={6} md={3} spacing={1}>
          <PSVideoCard
            title={"Alt Coin Trading: How to Spot a Scam Token"}
            url={"https://www.youtube.com/embed/vNOfWhTPG_Q"}
          />
        </Grid>
      </Grid>
    </NavFrame>
  )
}
