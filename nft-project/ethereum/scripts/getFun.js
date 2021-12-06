require("dotenv").config();
const { ethers } = require("ethers");

const contract = require("../artifacts/contracts/Fun.sol/Fun.json");
const contractInterface = contract.abi;

// https://docs.ethers.io/v5/api/providers
const provider = ethers.getDefaultProvider("ropsten", {
    alchemy: process.env.DEV_API_URL,
});

// https://docs.ethers.io/v5/api/signer/#Wallet
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

//https://docs.ethers.io/v5/api/contract/contract
const fun = new ethers.Contract(
    '0xf75D2219D624c1a17bD403f7842d214406479E9d',
    contractInterface,
    wallet
);

const main = () => {
    // erc20.aprove(3,"0x5682DC7f745171AA5D77605124fDdBD8CE0e5C41")
    fun
        .getFun(10)
        .then((transaction) => console.log(transaction))
        .catch((e) => console.log("something went wrong", e));
};

main();