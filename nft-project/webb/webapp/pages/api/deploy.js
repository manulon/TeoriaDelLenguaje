const { ethers } = require("hardhat");

export default async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            const Fun = await ethers.getContractFactory("Fun");
            const fun = await Fun.deploy();

            const Vinylmations = await ethers.getContractFactory("Vinylmations");
            const vinylmations = await Vinylmations.deploy(fun.address);

            const Exchange = await ethers.getContractFactory("Exchange");
            const exchange = await Exchange.deploy(vinylmations.address);

            var addresses = { 
                fun: fun.address, 
                vinylmations: vinylmations.address, 
                exchange: exchange.address
            };

            console.log(address);
            return address;

            break;
        case 'GET':
            break;
        default:
            break;
    }
}