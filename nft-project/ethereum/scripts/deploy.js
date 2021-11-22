// ethereum/scripts/deploy.js
const { ethers } = require("hardhat");

async function main() {
    const VinylmationsShapes = await ethers.getContractFactory("Vinylmations");
    const vinylmationsShapes = await VinylmationsShapes.deploy();
  
    console.log("Vinylmations deployed:", vinylmationsShapes.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });