// React Components and Hooks
import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { TextField } from "@material-ui/core"

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

const PSTextField = (props) => {
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
      onChange={props.onChange}
      type={props.type}
      required={props.required}
      disabled={props.disabled}
      InputLabelProps={{
        className: classes.root
      }}
      InputProps={{classes: {
        notchedOutline: classes.inputProps
      }}}
      />
    </>
  )
}

export default PSTextField
