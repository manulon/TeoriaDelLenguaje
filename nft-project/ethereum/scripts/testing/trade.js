require("dotenv").config();
const { ethers } = require("ethers");

const contract = require("../../artifacts/contracts/Exchange.sol/Exchange.json");
const contractInterface = contract.abi;

// https://docs.ethers.io/v5/api/providers
const provider = ethers.getDefaultProvider("ropsten", {
    alchemy: process.env.DEV_API_URL,
}); 7

// https://docs.ethers.io/v5/api/signer/#Wallet
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

//https://docs.ethers.io/v5/api/contract/contract
const exchange = new ethers.Contract(
    '0x4357031D46eb4B927dDB8979a29Bc36C80EC79B5',
    contractInterface,
    wallet
);

const main = () => {
    exchange
        .exchange_between(process.env.PUBLIC_KEY, 1, "0xC6E8aCC276eCb9ad044D530d6E84aB6CfD943c3C", 2)
        .then((transaction) => console.log(transaction))
        .catch((e) => console.log("something went wrong", e));
};

main();