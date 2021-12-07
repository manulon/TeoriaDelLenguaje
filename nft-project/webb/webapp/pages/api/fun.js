const { ethers } = require("ethers");

const funContract = require("../../../../ethereum/artifacts/contracts/Fun.sol/Fun.json");
const funContractInterface = funContract.abi;

export default function handler(req, res) {
  const provider = ethers.getDefaultProvider("ropsten", {
    alchemy: "https://eth-ropsten.alchemyapi.io/v2/wQy1KM82GKO4lQZhn89KAUISheuDlpIi",
  });
  const wallet = new ethers.Wallet(req.query.key, provider);
  const fun = new ethers.Contract(
    req.query.contract_addr,
    funContractInterface,
    wallet
  );
  console.log(req.method);
  switch (req.method) {
    case "GET":
      fun.getFun(10)
        .then((transaction) => res.status(200).json({ "transaction": transaction }))
        .catch((e) => res.status(405).json({ "error": e }));
      break;

    case "POST":
      fun.approve(req.query.address, req.query.amount)
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
