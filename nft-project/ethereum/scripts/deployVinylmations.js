// ethereum/scripts/deploy.js
const { ethers } = require("hardhat");


async function main() {
    const Vinylmations = await ethers.getContractFactory("Vinylmations");
    const vinylmations = await Vinylmations.deploy("0x7Ef6a3b0C56534384D8eeD1d8F55fc54eEfC00bd");

    console.log("Vinylmations deployed:", vinylmations.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });