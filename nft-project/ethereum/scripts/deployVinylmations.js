// ethereum/scripts/deploy.js
const { ethers } = require("hardhat");


async function main() {
    const Vinylmations = await ethers.getContractFactory("Vinylmations");
    const vinylmations = await Vinylmations.deploy("0xf75D2219D624c1a17bD403f7842d214406479E9d");

    console.log("Vinylmations deployed:", vinylmations.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });