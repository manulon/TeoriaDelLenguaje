require("dotenv").config();
const { ethers } = require("ethers");

const contract = require("../artifacts/contracts/Vinylmations.sol/Vinylmations.json");
const contractInterface = contract.abi;

// https://docs.ethers.io/v5/api/providers
const provider = ethers.getDefaultProvider("ropsten", {
    alchemy: process.env.DEV_API_URL,
});

// https://docs.ethers.io/v5/api/signer/#Wallet
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

//https://docs.ethers.io/v5/api/contract/contract
const emotionalShapes = new ethers.Contract(
    '0x5682DC7f745171AA5D77605124fDdBD8CE0e5C41',
    contractInterface,
    wallet
);

const main = () => {
    emotionalShapes
        .mint("0xC6E8aCC276eCb9ad044D530d6E84aB6CfD943c3C")
        .then((transaction) => console.log(transaction))
        .catch((e) => console.log("something went wrong", e));
};

main();