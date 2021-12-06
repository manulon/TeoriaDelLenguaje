require("dotenv").config();
const { ethers } = require("ethers");

const contract = require("../artifacts/contracts/Fun.sol/Fun.json");
const contractInterface = contract.abi;

// https://docs.ethers.io/v5/api/providers
const provider = ethers.getDefaultProvider("ropsten", {
    alchemy: process.env.DEV_API_URL,
});

// https://docs.ethers.io/v5/api/signer/#Wallet
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY_AZU, provider);

//https://docs.ethers.io/v5/api/contract/contract
const fun = new ethers.Contract(
    '0x5DF502BB5623E5A486f9ed31bFB6F6a8de84e804',
    contractInterface,
    wallet
);

const main = () => {
    // erc20.aprove(3,"0x5682DC7f745171AA5D77605124fDdBD8CE0e5C41")
    fun
        .approve("0xc430E9Ad6f68d0E480e864832d07Bd2cE3024bA0", 2)
        .then((transaction) => console.log(transaction))
        .catch((e) => console.log("something went wrong", e));
};

main();