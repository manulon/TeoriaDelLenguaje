require("dotenv").config();
const { ethers } = require("ethers");

const contract = require("../../artifacts/contracts/Fun.sol/Fun.json");
const contractInterface = contract.abi;

// https://docs.ethers.io/v5/api/providers
const provider = ethers.getDefaultProvider("ropsten", {
    alchemy: process.env.DEV_API_URL,
});

// https://docs.ethers.io/v5/api/signer/#Wallet
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

//https://docs.ethers.io/v5/api/contract/contract
const fun = new ethers.Contract(
    '0xBa14b15E28a4cB44e8203441bAd6c56Eb8716289',
    contractInterface,
    wallet
);

const main = () => {
    // erc20.aprove(3,"0x5682DC7f745171AA5D77605124fDdBD8CE0e5C41")
    const value = fun
        .allowance(process.env.PUBLIC_KEY, "0xc430E9Ad6f68d0E480e864832d07Bd2cE3024bA0")
        .then((transaction) => console.log(transaction))
        .catch((e) => console.log("something went wrong", e));
    console.log(value);
};

main();