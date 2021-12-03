require("dotenv").config();
const { ethers } = require("ethers");

const contract = require("../artifacts/contracts/Vinylmations.sol/Vinylmations.json");
const contractInterface = contract.abi;

// https://docs.ethers.io/v5/api/providers
const provider = ethers.getDefaultProvider("ropsten", {
    alchemy: process.env.DEV_API_URL,
}); 7

// https://docs.ethers.io/v5/api/signer/#Wallet
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

//https://docs.ethers.io/v5/api/contract/contract
const emotionalShapes = new ethers.Contract(
    '0xB97Cf7AC345aE4786Dc87eB486A4E9C4d30dC8d6',
    contractInterface,
    wallet
);

const main = () => {
    emotionalShapes
        .mint(process.env.PUBLIC_KEY)
        .then((transaction) => console.log(transaction))
        .catch((e) => console.log("something went wrong", e));
};

main();