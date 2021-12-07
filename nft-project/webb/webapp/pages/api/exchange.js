const { ethers } = require("ethers");

const exchangeContract = require("../../../../ethereum/artifacts/contracts/Exchange.sol/Exchange.json");
const exchangeContractInterface = exchangeContract.abi;

export default function handler(req, res) {
  const provider = ethers.getDefaultProvider("ropsten", {
    alchemy: "https://eth-ropsten.alchemyapi.io/v2/wQy1KM82GKO4lQZhn89KAUISheuDlpIi",
  });
  const wallet = new ethers.Wallet(req.query.key, provider);
  const exchange = new ethers.Contract(
    req.query.contract_addr,
    exchangeContractInterface,
    wallet
  );

  switch (req.method) {

    case "POST":
      exchange.exchange_between(req.query.a1, req.query.t1, req.query.a2, req.query.t2)
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
