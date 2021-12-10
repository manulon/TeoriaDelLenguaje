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

            res.status(200).json({ 
                "fun": fun.address, 
                "vinylmations": vinylmations.address, 
                "exchange": exchange.address
            });
            break;

        case 'GET':
            break;

        default:
            break;
    }
}