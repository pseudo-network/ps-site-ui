import { generateToken } from '../components/token_generator/tokenGenerator';
import { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar'
import NavFrame from "../components/organisms/NavFrame/NavFrame"
import PSButton from "../components/atoms/PSButton/PSButton"
import PSTextField from "../components/atoms/PSTextField/PSTextField"
import PSRadio from "../components/atoms/PSRadio/PSRadio"
import PSCard from "../components/molecules/PSCard/PSCard"
import PSSelect from "../components/atoms/PSSelect/PSSelect"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography, MenuItem} from "@material-ui/core"
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


const useStyles = makeStyles((theme) => ({
    header:{
        color:"#836AFF",
        textDecoration: "underline",
    },
    headerTokenomics:{
        color:"#836AFF",
        textDecoration: "underline",
        paddingLeft: ".86em",
    },
    padding: {
        paddingLeft: ".86em",
    },
    button:{
        // paddingRight: ".86em"
    },


}))

const Template = {
  SafeMoonClone: "Custom Safemoon Clone",
  SimpleToken: "Simple Token"
}

export default function Home() {

  const [network, setNetwork] = useState("Binance Smart Chain");
  const [template, setTemplate] = useState("Custom Safemoon Clone");
  const [tokenDecimal, setTokenDecimal] = useState();
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  const [tokenMaxTxAmount, setTokenMaxTxAmount] = useState("");
  const [tokenSell, setTokenSell] = useState("");
  const [tokenTax, setTokenTax] = useState();
  const [tokenLiquidity, setTokenLiquidity] = useState();
  const [txtDisabled, setTxtDisabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [preview, setPreview] = useState(false);
  const [previewTokenCode, setPreviewTokenCode] = useState("");

  const handlePreview = (text) => {
    setPreviewTokenCode(text);
  };

  const handleClick = (err) => {
    setErrorMessage(err);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    
    setOpen(false);
  };

  const validate = () => {
    if (template.length === 0) return "Must select a network."
    
    if (template.length === 0) return "Must select a template."

    if (tokenName.length === 0) return "Must specify token name."

    if (tokenSymbol.length === 0) return "Must specify token symbol."

    if (tokenAmount.length === 0) return "Must specify the amount of tokens."

    if (template === Template.SafeMoonClone){
      if (tokenMaxTxAmount.length === 0) return "Must specify the maximum tokens per transaction."
            
      if (tokenSell.length === 0) return "Must specify the amount of tokens to sell to add to liquidity."

      if (tokenMaxTxAmount > tokenAmount) return "Error, the maximum amount of tokens per transaction exceeds the amount of tokens created."

      if (tokenSell > tokenAmount) return "Error, the amount of tokens to sell to add to liquidity exceeds the amount of tokens created."
    }

    if (Number(tokenTax) >= 100) return "Error, the token tax percentage fee cannot exceed 100."

    if (Number(tokenLiquidity) >= 100) return "Error, the token liquidity percentage fee cannot exceed 100."

    if ((Number(tokenLiquidity) + Number(tokenTax)) >= 100) return "Error, the token liquidity percentage fee plus the token liquidity percentage fee cannot exceed 100."

    if (tokenDecimal != 9 && tokenDecimal != 18) return "Error, the token decimal amount needs to be 9 or 18."

    return null
  }

  function clearFields()
  {
    setTokenName("");
    setTokenSymbol("");
    setTokenAmount("");
    setTokenDecimal("")
    setTokenMaxTxAmount(""); 
    setTokenSell(""); 
    setTokenTax(""); 
    setTokenLiquidity("");
  }

  const classes = useStyles()

    return (
        <div className="App">
            <NavFrame page={"Dashboard"}>
                <PSCard
                    title= {
                    <div>
                        <strong>PseudoCoin Token Builder Alpha V0.0.1</strong>
                    </div>
                    }
                    content= {
                        <> 
                            <Grid container spacing={2}>
                                <Grid container item xs={12}>       
                                    <FormControl className={classes.padding} component="fieldset">
                                        <FormLabel focused={false} className={classes.header} component="legend"><h4>Network</h4></FormLabel>
                                            <RadioGroup aria-label="network" name="network1" value={network} onChange = {(event) => {setNetwork(event.target.value)}}>
                                                <FormControlLabel value="Binance Smart Chain" control={<PSRadio checked={network === "Binance Smart Chain"} />} label="Binance Smart Chain" />
                                                <FormControlLabel value="Ethereum Smart Chain" disabled control={<PSRadio />} label="Ethereum Smart Chain" />
                                                <FormControlLabel value="Cardano Smart Chain" disabled control={<PSRadio />} label="Cardano Smart Chain" />
                                            </RadioGroup>
                                    </FormControl>

                                <Grid container item xs={12} > 
                                    <FormControl className={classes.padding} component="fieldset">
                                        <FormLabel focused={false} className={classes.header} component="legend"><h4>Template</h4></FormLabel>
                                            <RadioGroup aria-label="template" name="template1" value={template} onChange = {(event) => {setTemplate(event.target.value)}}>
                                                <FormControlLabel value= "Custom Safemoon Clone" control={<PSRadio checked={template === "Custom Safemoon Clone"}/>} label= "Custom Safemoon Clone" onChange = {(event) => {setTxtDisabled(!event.target.value)}} />
                                                <FormControlLabel value= "Simple Token"  control={<PSRadio />} label= "Simple Token" onChange = {(event) => {
                                                    console.log("running on change code")
                                                    setTxtDisabled(event.target.value);
                                                }} />
                                                <FormControlLabel value="Custom Token Coming Soon" disabled control={<PSRadio />} label="Custom Token Coming Soon" />
                                            </RadioGroup>
                                    </FormControl>
                                </Grid>
                                </Grid>

                                <Grid container item xs={12} >                    
                                    <FormLabel focused={false} className={classes.headerTokenomics} component="legend"><h4>Tokenomics</h4></FormLabel>   
                                </Grid> 

                                <Grid container item xs={12}> 
                                    <PSTextField 
                                        id = "tokenName"
                                        label = "Token Name" 
                                        variant = "outlined" 
                                        required
                                        value = {tokenName}
                                        onChange = {(event) => setTokenName(event.target.value)}
                                    />

                                    <PSTextField 
                                        id = "tokenSymbol"
                                        label = "Token Symbol" 
                                        variant = "outlined" 
                                        required
                                        value = {tokenSymbol}
                                        onChange = {(event) => setTokenSymbol(event.target.value)}
                                    />

                                    <PSTextField 
                                        id = "tokenAmount"
                                        label = "Number of Tokens" 
                                        variant = "outlined" 
                                        required
                                        value = {tokenAmount}
                                        type="number"
                                        onChange = {(event) => setTokenAmount(Number(event.target.value))
                                        }
                                    />

                                    
                                    <PSSelect
                                    // this needs fixing at somepoint, its getting the menu items from PSSelect.js, when it should be getting them
                                    // from here
                                        id = "Token Decimals"
                                        label = "Token Decimals" 
                                        variant = "outlined"
                                        select 
                                        required
                                        value = {tokenDecimal}
                                        type="number"
                                        onChange = {(event) => setTokenDecimal(event.target.value)
                                        }
                                    > 
                                    </PSSelect> 

                                    <PSTextField 
                                        id = "Tax Percentage Fee"
                                        label = "Tax Percentage Fee" 
                                        variant = "outlined" 
                                        required={!txtDisabled}
                                        disabled={txtDisabled}
                                        value = {tokenTax}
                                        type="number"
                                        onChange = {(event) => setTokenTax(Number(event.target.value))
                                        }
                                    />

                                    <PSTextField 
                                        id = "Liquidity Percentage Fee"
                                        label = "Liquidity Percentage Fee" 
                                        variant = "outlined" 
                                        required={!txtDisabled}
                                        disabled={txtDisabled}
                                        value = {tokenLiquidity}
                                        type="number"
                                        onChange = {(event) => setTokenLiquidity(Number(event.target.value))
                                        }
                                    />

                                    <PSTextField 
                                        id = "tokenMaxTxAmount"
                                        label = "Max Transaction Amount" 
                                        variant = "outlined" 
                                        required={!txtDisabled}
                                        type="number"
                                        disabled={txtDisabled}
                                        value = {tokenMaxTxAmount}
                                        onChange = {(event) => {
                                        setTokenMaxTxAmount(Number(event.target.value))
                                        }}
                                    />

                                    <PSTextField 
                                        id = "numTokensSellToAddToLiquidity"
                                        label = "Tokens to Add to Liquidity" 
                                        variant = "outlined" 
                                        required={!txtDisabled}
                                        type="number"
                                        disabled={txtDisabled}
                                        value = {tokenSell}
                                        onChange = {(event) => setTokenSell(Number(event.target.value))}
                                    />
                                </Grid>

                                <Grid container item xs={12}>
                                    {preview ?
                                            <TextareaAutosize
                                                maxRows= "15"
                                                style={{ width: "100%" }}
                                                defaultValue= {previewTokenCode}
                                                value= {previewTokenCode}
                                            />
                                                : 
                                                <></>
                                    }        
                                </Grid>  

                                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                        <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: '100%' }}>
                                        {String(errorMessage)}
                                        </Alert>
                                    </Snackbar>

                                <Grid 
                                    container xs={12}  
                                    direction="row" 
                                    justifyContent="flex-end"
                                    alignItems="flex-end" 
                                    spacing={1}
                                > 

                                    <Grid item>
                                        <PSButton className={classes.button} text={"Reset"} onClick={() => { 
                                                clearFields()
                                                setPreview(false)
                                            }}>
                                        </PSButton>
                                    </Grid>

                                    <Grid item>
                                        <PSButton className={classes.button} text={"Preview"} onClick={(event) => { 

                                            const err = validate()
                                            if (err) {
                                                handleClick(err); 
                                                return
                                            }

                                            let func = "preview";
                                            handlePreview(generateToken(network, template, tokenName, tokenSymbol, tokenAmount, tokenDecimal, tokenTax, tokenLiquidity, tokenMaxTxAmount, tokenSell, func))
                                            setPreview(true);
                                            }}>
                                        </PSButton>
                                    </Grid> 

                                    <Grid item>
                                        <PSButton className={classes.button} text={"Download"} onClick={() => { 
                                            const err = validate()
                                            if (err) {
                                                handleClick(err); 
                                                return
                                            }
                                            
                                            let func = "download";
                                            generateToken(network, template, tokenName, tokenSymbol, tokenAmount, tokenDecimal, tokenTax, tokenLiquidity, tokenMaxTxAmount, tokenSell, func);

                                            }}>
                                        </PSButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </>
                    }
                />
            </NavFrame>
        </div>
    );
}
