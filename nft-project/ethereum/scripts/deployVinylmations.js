// ethereum/scripts/deploy.js
const { ethers } = require("hardhat");


async function main() {
    const Vinylmations = await ethers.getContractFactory("Vinylmations");
    const vinylmations = await Vinylmations.deploy("0xA61E76b0B5992790acDAc2108dDc8eAE3bfD67e1");

    console.log("Vinylmations deployed:", vinylmations.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });