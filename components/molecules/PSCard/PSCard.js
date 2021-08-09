import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import { CardActions } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    minHeight: 233,
  },
  media: {
    width: "100%",
    height: "100%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    color: "#836AFF",
  },
}))

export default function PSCard(props) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      {props.title && (
        <CardHeader
          avatar={
            props.avatar &&
            props.avatar && <div className={classes.avatar}>{props.avatar}</div>
          }
          className={classes.title}
          title={props.title}
          subheader={props.subheader}
        />
      )}
      {props.imgURL && (
        <CardMedia className={classes.media} image={props.imgURL} />
      )}
      {props.content && <CardContent>{props.content}</CardContent>}

      {props.footerContent && <CardActions>{props.footerContent}</CardActions>}
    </Card>
  )
}
