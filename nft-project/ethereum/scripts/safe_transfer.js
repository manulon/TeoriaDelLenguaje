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
const vinylmations = new ethers.Contract(
    '0x5682DC7f745171AA5D77605124fDdBD8CE0e5C41',
    contractInterface,
    wallet
);
//["safeTransferFrom(address,address,uint256)"]("0x7C559dCbD939761974184F1bcd359621672D2e05", "0xC6E8aCC276eCb9ad044D530d6E84aB6CfD943c3C", 1)
// .ownerOf(1)
// vinylmations["setApprovalForAll(address,bool)"]("0xEC998f93b47DC88f4EEF5F70a645B522Fd4e35aE", true)
const main = () => {
    vinylmations["isApprovedForAll(address,address)"](process.env.PUBLIC_KEY, "0x28ac0695706Ba1dacBca5751C053cFD02816A18b")
        .then((transaction) => console.log(transaction))
        .catch((e) => console.log("something went wrong", e));

};

main();