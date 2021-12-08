// ethereum/scripts/deploy.js
const { ethers } = require("hardhat");


async function main() {
    const Exchange = await ethers.getContractFactory("Exchange");
    const exchange = await Exchange.deploy("0x6B443592b79A1A3C0D2fB0E479961A84dE085d8f");

    console.log("Exchange deployed:", exchange.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });