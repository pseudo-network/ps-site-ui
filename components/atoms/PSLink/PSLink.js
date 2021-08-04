import React from "react"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
    fontFamily: theme.typography.regular,
    color: "#836AFF",
  },
}))

const PSLink = (props) => {
  const classes = useStyles()

  /*
    ON RENDER FUNCTION/ MOUNT COMPENENT
  */
  return (
    <>
      <a
        className={classes.root}
        color="active"
        href={props.url}
        target={props.newTab ? "_blank" : ""}
        rel="noreferrer"
      >
        <p style={{ display: "flex", "align-items": "center" }}>
          {props.text}
          {props.withIcon ? <ChevronRightIcon /> : <></>}
        </p>
      </a>
    </>
  )
}

export default PSLink
