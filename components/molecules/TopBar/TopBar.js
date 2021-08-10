import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  InputBase,
  TextField,
  Popover,
  Grid,
} from "@material-ui/core"
import Autocomplete from "@material-ui/lab/Autocomplete"
import PSButton from "../../atoms/PSButton/PSButton"
import PSLink from "../../atoms/PSLink/PSLink"
import PSDialog from "../PSDialog/PSDialog"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import PSLabel from "../../atoms/PSLabel/PSLabel"
import SearchIcon from "@material-ui/icons/Search"
import PropTypes from "prop-types"
import { useWallet } from "../../../contexts/walletContext"
import Image from "next/image"
import Link from "next/link"
import {
  WEB_APP_URL,
  LANDING_URL,
  CHART_URL,
  BLOG_URL,
} from "../../../core/environments"
import {
  CallToAction,
  InsertChart,
  LibraryBooks,
  Web,
} from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    paddingTop: ".60em",
    paddingBottom: ".60em",
    borderBottom: ".01px solid #545761",
    fontFamily: theme.typography.regular,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontFamily: theme.typography.regular,
  },
  titleContainer: {
    flexGrow: 1,
    fontFamily: theme.typography.regular,
    alignItems: "center",
    alignContent: "center",
    display: "flex",
  },
  title: {
    marginLeft: 13,
  },
  link: {
    paddingLeft: 10,
  },
  balance: {
    marginRight: 10,
  },
  inputRoot: {
    color: "inherit",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  logo: {
    cursor: "pointer",
  },
  popover: {
    width: 299,
    padding: "1.2em",
  },
  appSelection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer",
  },
  appSelectionLogo: {
    display: "flex",
    justifyContent: "center",
    color: "#836AFF",
    fontSize: "15px",
  },
  appSelectionText: {
    display: "flex",
    justifyContent: "center",
    margin: ".6em",
  },
}))

export default function TopBar(props) {
  const classes = useStyles()
  const [dialogOpen, setDialogOpen] = useState(false)
  const walletContext = useWallet()

  const metamask = async () => {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" })
    const address = accounts[0]
    walletContext.setAddress(address)
  }

  const handleConnectWalletClick = () => {
    if (typeof window.ethereum !== "undefined") {
      metamask()
    }
  }

  const handleOpenDialogClick = () => {
    setDialogOpen(true)
  }

  const handleCloseDialogClick = () => {
    setDialogOpen(false)
  }

  const copyAddressToClipboard = () => {
    navigator.clipboard.writeText(walletContext.address)
  }

  const handleLogoutOnClick = () => {
    walletContext.setAddress(null)
    setDialogOpen(false)
  }

  const ModalContent = () => {
    return (
      <>
        <h3>{walletContext.address}</h3>
        <Box flexDirection="row">
          <PSLink
            text={"BscScan"}
            url={"https://bscscan.com/address/" + walletContext.address}
          ></PSLink>
          <div>
            <PSLink
              className={classes.link}
              text={
                <>
                  Copy Account Address <FileCopyIcon />
                </>
              }
              onClick={copyAddressToClipboard}
            ></PSLink>
          </div>
          <div>
            <PSButton text={"logout"} onClick={handleLogoutOnClick} />
          </div>
        </Box>
      </>
    )
  }

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleAppMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleAppMenuClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  return (
    <>
      <AppBar elevation={0} position="fixed" className={classes.appBar}>
        <Toolbar>
          <Box className={classes.titleContainer}>
            <Image
              className={classes.logo}
              src={"/imgs/ps-logo.png"}
              width={40}
              height={40}
              onClick={handleAppMenuClick}
            />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleAppMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Grid container className={classes.popover}>
                <Grid item xs={4}>
                  <Link href={LANDING_URL}>
                    <Box className={classes.appSelection}>
                      <div className={classes.appSelectionLogo}>
                        <CallToAction fontSize="large" />
                      </div>
                      <p className={classes.appSelectionText}> Landing </p>
                    </Box>
                  </Link>
                </Grid>
                <Grid item xs={4}>
                  <Link href={WEB_APP_URL}>
                    <Box className={classes.appSelection}>
                      <div className={classes.appSelectionLogo}>
                        <Web fontSize="large" />
                      </div>
                      <p className={classes.appSelectionText}> Web App </p>
                    </Box>
                  </Link>
                </Grid>
                <Grid item xs={4}>
                  <Link href={CHART_URL}>
                    <Box className={classes.appSelection}>
                      <div className={classes.appSelectionLogo}>
                        <InsertChart fontSize="large" />
                      </div>
                      <p className={classes.appSelectionText}> Charts </p>
                    </Box>
                  </Link>
                </Grid>
                <Grid item xs={4}>
                  <Link href={BLOG_URL}>
                    <Box className={classes.appSelection}>
                      <div className={classes.appSelectionLogo}>
                        <LibraryBooks fontSize="large" />
                      </div>
                      <p className={classes.appSelectionText}> Blog </p>
                    </Box>
                  </Link>
                </Grid>
              </Grid>
            </Popover>
            <Typography variant="h6" className={classes.title}>
              PseudoCoin
            </Typography>
          </Box>

          <div className={classes.search}></div>
          {/* <div className={classes.balance}>
            <PSLabel text={walletContext.balance} />
          </div> */}
          <PSButton
            onClick={
              walletContext.address
                ? handleOpenDialogClick
                : handleConnectWalletClick
            }
            text={
              walletContext.address ? walletContext.address : "Connect Wallet"
            }
          />
        </Toolbar>
      </AppBar>
      <PSDialog
        open={dialogOpen}
        handleClose={handleCloseDialogClick}
        title={"Your Wallet"}
        content={<ModalContent />}
      />
    </>
  )
}
