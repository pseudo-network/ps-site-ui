import { ethers } from "ethers";

    let result;

    const startPayment = async ({ether, addr }) => {
        
        try {
          if (!window.ethereum)
            throw new Error("No MetaMask wallet found. Please install it.");
          await window.ethereum.send("eth_requestAccounts");
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          ethers.utils.getAddress(addr);
          const tx = await signer.sendTransaction({
            to: addr,
            value: ethers.utils.parseEther(ether)
          });
          console.log({ ether, addr });
          console.log("tx", tx);
          result = "Success! View transaction at https://bscscan.com/tx/" + tx.hash;
        } catch (err) {
        result = err.message;     
        }
      };
     
    export const payRequest = async (ether, addr) => {
      await startPayment({
        ether: ether,
        addr: addr
      });
      return result;
    }