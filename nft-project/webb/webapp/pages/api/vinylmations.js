const { ethers } = require("ethers");

const vinylmationsContract = require("../../../../ethereum/artifacts/contracts/Vinylmations.sol/Vinylmations.json");
const vinylmationsContractInterface = vinylmationsContract.abi;

export default function handler(req, res) {
  const provider = ethers.getDefaultProvider("ropsten", {
    alchemy: "https://eth-ropsten.alchemyapi.io/v2/wQy1KM82GKO4lQZhn89KAUISheuDlpIi",
  });
  const wallet = new ethers.Wallet(req.query.key, provider);
  const vinylmations = new ethers.Contract(
    req.query.contract_addr,
    vinylmationsContractInterface,
    wallet
  );

  switch (req.method) {
    case "GET":
      vinylmations.mint(req.query.address)
        .then((transaction) => res.status(200).json({ "transaction": transaction }))
        .catch((e) => res.status(405).json({ "error": e }));
      break;

    case "POST":
      vinylmations.approve(req.query.sendTo, req.query.tokenId)
        .then((transaction) => res.status(200).json({ "transaction": transaction }))
        .catch((e) => res.status(405).json({ "error": e }));
      break;
      
    default:
      res.status(405).json({
        mensaje: `El método HTTP ${req.method} no esta disponible en esta ruta`,
      });
      break;
  }

}
