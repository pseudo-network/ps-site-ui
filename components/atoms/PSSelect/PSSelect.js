// React Components and Hooks
import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { TextField, MenuItem } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    inputProps: {
        borderWidth: "1px",
        borderColor: "#836AFF !important",
        color: "#A694FE",
    },
    root: {   
        color: "#ACB0BB",

        "& label.Mui-focused": {
            color: "#A694FE"
        },

        '& .MuiInputBase-root': {
            color: 'primary', 
        },
        padding: ".66em",
    },
}))

const PSSelect = (props) => {
  const classes = useStyles()

  /*
    ON RENDER FUNCTION/ MOUNT COMPENENT
  */
  return (
    <>
      <TextField 
      label={props.label} 
      variant={props.variant} 
      className={classes.root} 
      value={props.value}
      select={props.select}
      helperText={props.helperText}
      onChange={props.onChange}
      type={props.type}
      required={props.required}
      disabled={props.disabled}
      style = {{width: 250}} //need to find a better solution to this to make the sizing right
      InputLabelProps={{
        className: classes.root
      }}
      InputProps={{classes: {
        notchedOutline: classes.inputProps
      }}}
      >
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={18}>18</MenuItem>
      </TextField >
    </>
  )
}

export default PSSelect
