import { Templates } from "./templates";
import saveAs from 'file-saver';

export function generateToken(network, textTemplate, tokenName, tokenSymbol, tokenAmount, tokenDecimal, tokenTax, tokenLiquidity, tokenMaxTxAmount, tokenSell){

    if (network === "Binance Smart Chain"){
        switch (textTemplate){
            case Templates.SafeMoonClone.name:
                textTemplate = Templates.SafeMoonClone.code;
                textTemplate = textTemplate.replace("tokenName", tokenName);
                textTemplate = textTemplate.replace("tokenSymbol", tokenSymbol);
                textTemplate = textTemplate.replace('tokenDecimal', tokenDecimal);
                textTemplate = textTemplate.replace("tokenNumAmount", tokenAmount);
                textTemplate = textTemplate.replace("tokenTax", tokenTax);
                textTemplate = textTemplate.replace("tokenLiquidity", tokenLiquidity);
                textTemplate = textTemplate.replace("tokenMaxTxAmount", tokenMaxTxAmount);
                textTemplate = textTemplate.replace("tokenSell", tokenSell);

                break; 
            case Templates.SimpleToken.name:
                textTemplate = Templates.SimpleToken.code;
                textTemplate = textTemplate.replace("tokenName", tokenName);
                textTemplate = textTemplate.replace("tokenSymbol", tokenSymbol);
                textTemplate = textTemplate.replace('tokenDecimal', tokenDecimal);
                textTemplate = textTemplate.replace("tokenNumAmount", tokenAmount);
                break;
            default:
                alert('Error Getting Template');
                break;
        }

    }
    // for testing fdsfdsf
    // console.log("Attempting to generate " + tokenName);
    // console.log(textTemplate);

    //downloads the file
    var blob = new Blob([textTemplate], {type: "text/plain;charset=utf-8"});
    saveAs(blob, tokenName +".sol");

}

export function previewToken(network, textTemplate, tokenName, tokenSymbol, tokenAmount, tokenDecimal, tokenTax, tokenLiquidity, tokenMaxTxAmount, tokenSell){

    if (network === "Binance Smart Chain"){
        switch (textTemplate){
            case Templates.SafeMoonClone.name:
                textTemplate = Templates.SafeMoonClone.code;
                textTemplate = textTemplate.replace("tokenName", tokenName);
                textTemplate = textTemplate.replace("tokenSymbol", tokenSymbol);
                textTemplate = textTemplate.replace('tokenDecimal', tokenDecimal);
                textTemplate = textTemplate.replace("tokenNumAmount", tokenAmount);
                textTemplate = textTemplate.replace("tokenTax", tokenTax);
                textTemplate = textTemplate.replace("tokenLiquidity", tokenLiquidity);
                textTemplate = textTemplate.replace("tokenMaxTxAmount", tokenMaxTxAmount);
                textTemplate = textTemplate.replace("tokenSell", tokenSell);

                break; 
            case Templates.SimpleToken.name:
                textTemplate = Templates.SimpleToken.code;
                textTemplate = textTemplate.replace("tokenName", tokenName);
                textTemplate = textTemplate.replace("tokenSymbol", tokenSymbol);
                textTemplate = textTemplate.replace('tokenDecimal', tokenDecimal);
                textTemplate = textTemplate.replace("tokenNumAmount", tokenAmount);
                break;
            default:
                alert('Error Getting Template');
                break;
        }

    }

    return textTemplate
}
