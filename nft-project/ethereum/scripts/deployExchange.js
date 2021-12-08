// ethereum/scripts/deploy.js
const { ethers } = require("hardhat");


async function main() {
    const Exchange = await ethers.getContractFactory("Exchange");
    const exchange = await Exchange.deploy("0x633de08Def23d46510fCFb85c40606b6A0BfCf6C");

    console.log("Exchange deployed:", exchange.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });