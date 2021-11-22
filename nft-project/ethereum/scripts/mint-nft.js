require('dotenv').config();
const API_URL = 'https://eth-ropsten.alchemyapi.io/v2/W7bMx-8k8OTkvFXm1EYwFkjMl6Ujjqan';
const PUBLIC_KEY = '0xC6E8aCC276eCb9ad044D530d6E84aB6CfD943c3C';
const PRIVATE_KEY = '922939429c71121a82d155492b678e961a5d217e9583f7295a7e64d492435e27';

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/Vinylmations.sol/Vinylmations.json");
const contractAddress = "0x7Ec256aa4CC3661f2a570D1c1D05E0dfd5307fFE";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);
//console.log(JSON.stringify(contract.abi));

async function mintNFT(tokenURI) {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce

//the transaction
  const tx = {
    'from': PUBLIC_KEY,
    'to': contractAddress,
    'nonce': nonce,
    'gas': 500000,
    'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
  };


    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    signPromise.then((signedTx) => {
      web3.eth.sendSignedTransaction(signedTx.rawTransaction, function (err, hash) {
            if (!err) {
              console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
              )
            } else {
              console.log(
              "Something went wrong when submitting your transaction:",
              err
              )
            }
      })
    }).catch((err) => {console.log(" Promise failed:", err)})
}

mintNFT("https://gateway.pinata.cloud/ipfs/QmTKNKw11NjmiQgB5t6deJ3So7q9EvAafXsUKJFzKVDZLK")
  
