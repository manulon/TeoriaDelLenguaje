// ethereum/scripts/deploy.js
const { ethers } = require("hardhat");


async function main() {
    const Fun = await ethers.getContractFactory("Fun");
    const fun = await Fun.deploy();

    console.log("Fun deployed:", fun.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });