// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { ethers } = require("ethers");


const funContract = require("../../../../ethereum/artifacts/contracts/Fun.sol/Fun.json");
const funContractInterface = funContract.abi;
// https://docs.ethers.io/v5/api/providers
// https://docs.ethers.io/v5/api/signer/#Wallet

export default function handler(req, res) {
  const provider = ethers.getDefaultProvider("ropsten", {
    alchemy: "https://eth-ropsten.alchemyapi.io/v2/wQy1KM82GKO4lQZhn89KAUISheuDlpIi",
  });
  const wallet = new ethers.Wallet(req.query.key, provider);
  const fun = new ethers.Contract(
    '0x87A3f37B65DA653A004D430F1aAADAC8ece3502c',
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
