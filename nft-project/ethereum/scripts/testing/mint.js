require("dotenv").config();
const { ethers } = require("ethers");

const contract = require("../../artifacts/contracts/Vinylmations.sol/Vinylmations.json");
const contractInterface = contract.abi;
const funContract = require("../../artifacts/contracts/Fun.sol/Fun.json");
const funContractInterface = funContract.abi;
// https://docs.ethers.io/v5/api/providers
const provider = ethers.getDefaultProvider("ropsten", {
    alchemy: process.env.DEV_API_URL,
});

// https://docs.ethers.io/v5/api/signer/#Wallet
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY_FEDE, provider);

//https://docs.ethers.io/v5/api/contract/contract
const vinylmations = new ethers.Contract(
    '0x677278B42008Bd654c2245B8666AB7007704F255',
    contractInterface,
    wallet
);


const main = async () => {
    // erc20.aprove(3,"0x5682DC7f745171AA5D77605124fDdBD8CE0e5C41")
    // await fun.approve(vinylmations.address, 1)
    //     .then((transaction) => console.log(transaction));

    // await console.log("\n \n \n");
    await vinylmations
        .mint(process.env.PUBLIC_KEY_FEDE)
        .then((transaction) => console.log(transaction))
        .catch((e) => console.log("something went wrong", e));
};

main();