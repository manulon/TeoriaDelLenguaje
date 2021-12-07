// ethereum/scripts/deploy.js
const { ethers } = require("hardhat");


async function main() {
    const Vinylmations = await ethers.getContractFactory("Vinylmations");
    const vinylmations = await Vinylmations.deploy("0x87A3f37B65DA653A004D430F1aAADAC8ece3502c");

    console.log("Vinylmations deployed:", vinylmations.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });