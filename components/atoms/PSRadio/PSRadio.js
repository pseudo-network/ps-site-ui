// React Components and Hooks
import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { Radio } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'secondary',
    // backgroundColor: "rgba(131, 106, 255, 0.25)",
    // border: "1px solid #836AFF",
    // padding: ".66em",
    fontFamily: theme.typography.regular,
  },

  radio: {
    '&$checked': {
      color: "#A694FE"
    }
  },
  checked: {},
}))

const PSRadio = (props) => {
  const classes = useStyles()

  /*
    ON RENDER FUNCTION/ MOUNT COMPENENT
  */
  return (
    <>
      <Radio
      className={classes.root}
      checked = {props.checked}
      control = {props.control}
      value={props.value}
      label={props.label}
      disabled={props.disabled}
      classes={{root: classes.radio, checked: classes.checked}}
      onChange={props.onChange}
      />   
    </>
  )
}

export default PSRadio
