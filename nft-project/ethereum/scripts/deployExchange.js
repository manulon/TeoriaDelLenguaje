// ethereum/scripts/deploy.js
const { ethers } = require("hardhat");


async function main() {
    const Exchange = await ethers.getContractFactory("Exchange");
    const exchange = await Exchange.deploy("0x5682DC7f745171AA5D77605124fDdBD8CE0e5C41");

    console.log("Exchange deployed:", exchange.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });