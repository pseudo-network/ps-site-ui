import React from "react"
import { connect } from "react-redux"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import Collapse from "@material-ui/core/Collapse"
import Drawer from "@material-ui/core/Drawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import Toolbar from "@material-ui/core/Toolbar"
import TopBar from "../../molecules/TopBar/TopBar"
import SocialMediaRow from "../../molecules/SocialMediaRow/SocialMediaRow"
import Watermark from "../../molecules/Watermark/Watermark"
import { AccountBalance, InsertChart, SwapHoriz, Home, Videocam, Map, BarChart, ReceiptOutlined, AccountTree } from "@material-ui/icons"
import { alpha, makeStyles } from "@material-ui/core/styles"
import Link from 'next/link'
import { useHistory } from "react-router-dom"

const drawerWidth = 300

function ListItemObject(title, icon, path, isDisabled = false, newTab = false) {
  const target = newTab ? "_blank" : "_"
  
  return {
    title: title,
    icon: icon,
    path: path,
    isDisabled: isDisabled,
    target: target
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    position: "relative",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  listHeader: {
    paddingLeft: "1.5em",
    paddingRight: "1.5em",
    color: "#836AFF",
  },
  listItem: {
    borderRadius: ".5rem",
    fontFamily: theme.typography.regular,
  },
  listItemParent: {
    paddingLeft: "1.5em",
    paddingRight: "1.5em",
  },
  socialMediaRowParent: {
    paddingLeft: "1.5em",
    paddingRight: "1.5em",
    position: "absolute",
    bottom: 10,
    width: "100%",
    display: "grid",
    justifyContent: "center",
  },
}))

export default function NavFrame(props) {
  const history = useHistory()

  const pages = [
    ListItemObject("Home", <Home />, "/"),
    ListItemObject("Videos", <Videocam />, "/videos"),
  ]

  const tools = [
    ListItemObject("Charts", <BarChart />, "http://charts.pseudonetwork.net/0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3", false, true),
  ]

  const others = [
    ListItemObject("Whitepaper", <ReceiptOutlined/>, "https://pseudocoin.net/Real_PseudoCoin_Whitepaper.pptx.pdf", false, true),
    ListItemObject("Linktree", <AccountTree/>, "https://linktr.ee/PseudoCoin", false, true),
    ListItemObject("Roadmap", <Map />, "/roadmap", true),
  ]

  const NavListItem = ({ navItem, key }) => {
    const classes = useStyles()
    // const isSelected = navItem.path == props.location.pathname

    const navigate = () =>{
      history.push(navItem.path)
    }

    return (
      <>
        {navItem.isDisabled ? ( // if the nav list item is disabled:
          <ListItem id={key} className={classes.listItem} disabled={true}>
            <ListItemIcon>{navItem.icon}</ListItemIcon>
            <ListItemText className={classes.listItemText} primary={navItem.title + " (Soon)"} />
          </ListItem>
        ) : (
          <Link href={navItem.path}>
            <ListItem
              button
              id={key}
              // selected={isSelected}
              className={classes.listItem}
            >
              <ListItemIcon>{navItem.icon}</ListItemIcon>
              <ListItemText primary={navItem.title} />
            </ListItem>
          </Link>
        )}
      </>
    )
  }

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar address={props.address} />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar className={classes.toolbar} />
        <div className={classes.drawerContainer}>
          <List>
            <h4 className={classes.listHeader}>Pages</h4>     
            {pages.map((item, key) => {
              // console.log("NavListItem" + key);
              return (
                <div key={key} className={classes.listItemParent}>
                  <NavListItem
                    navItem={item}
                    id={item.path + "NavListItem" + key}
                  />
                </div>
              )
            })}
          </List>
          <List>
            <h4 className={classes.listHeader}>Tools</h4>     
            {tools.map((item, key) => {
              // console.log("NavListItem" + key);
              return (
                <div key={key} className={classes.listItemParent}>
                  <NavListItem
                    navItem={item}
                    id={item.path + "NavListItem" + key}
                  />
                </div>
              )
            })}
          </List>
          <List>
            <h4 className={classes.listHeader}>Links</h4>     
            {others.map((item, key) => {
              // console.log("NavListItem" + key);
              return (
                <div key={key} className={classes.listItemParent}>
                  <NavListItem
                    navItem={item}
                    id={item.path + "NavListItem" + key}
                  />
                </div>
              )
            })}
          </List>
          <div className={classes.socialMediaRowParent}>
            {" "}
            <SocialMediaRow />
            <br />
            <Watermark />
          </div>
        </div>
      </Drawer>
      <Divider />
      <main className={classes.content}>
        <Toolbar className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  )
}