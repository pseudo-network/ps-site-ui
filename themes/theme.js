import { createMuiTheme } from "@material-ui/core/styles"
import "../styles/Home.module.css"

const LightTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#0D111B",
    },
    secondary: {
      main: "#070B15",
    },
    text: {
      primary: "#ACB0BB",
      secondary: "#25272D",
      disabled: "#545761",
    },
    action: {
      active: "#836AFF",
      hover: "#14171F",
      selected: "#25272D",
      disabled: "#0D111B",
      disabledBackground: "#0D111B",
    },
    background: {
      default: "#151c2c",
      paper: "#0D111B",
    },
    typography: {
      bold: "Now-Bold, Arial",
      light: "Now-Bold, Arial",
      regular: "Poppins, Arial",
    },
    // divider: {
    //   // main:
    // },
  },

  // light
  // palette: {
  //   type: "light",
  //   primary: {
  //     main: "#fff",
  //   },
  //   secondary: {
  //     main: "#070B15",
  //   },
  //   text: {
  //   },
  //   action: {
  //     active: "#836AFF",
  //     hover: "#14171F",
  //   },
  // },
})

export default LightTheme
