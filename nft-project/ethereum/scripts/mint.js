require("dotenv").config();
const { ethers } = require("ethers");

const contract = require("../artifacts/contracts/Vinylmations.sol/Vinylmations.json");
const contractInterface = contract.abi;

// https://docs.ethers.io/v5/api/providers
const provider = ethers.getDefaultProvider("ropsten", {
  alchemy: 'https://eth-ropsten.alchemyapi.io/v2/W7bMx-8k8OTkvFXm1EYwFkjMl6Ujjqan',
});

// https://docs.ethers.io/v5/api/signer/#Wallet
const wallet = new ethers.Wallet('922939429c71121a82d155492b678e961a5d217e9583f7295a7e64d492435e27', provider);

//https://docs.ethers.io/v5/api/contract/contract
const emotionalShapes = new ethers.Contract(
  '0xe1F2d25A4D6ab1f17536D330AA5E64EE6b7467e1',
  contractInterface,
  wallet
);

const main = () => {
  emotionalShapes
    .mint('0xC6E8aCC276eCb9ad044D530d6E84aB6CfD943c3C')
    .then((transaction) => console.log(transaction))
    .catch((e) => console.log("something went wrong", e));
};

main();