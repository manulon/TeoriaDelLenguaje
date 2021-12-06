// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { ethers } = require("ethers");


const funContract = require("../../../../ethereum/artifacts/contracts/Fun.sol/Fun.json");
const funContractInterface = funContract.abi;
// https://docs.ethers.io/v5/api/providers
const provider = ethers.getDefaultProvider("ropsten", {
  alchemy: "https://eth-ropsten.alchemyapi.io/v2/wQy1KM82GKO4lQZhn89KAUISheuDlpIi",
});
const wallet = new ethers.Wallet("958fa06550a78d2b7f0122727913ae8a3cf2d600a4a572f152c59aff41e80ea2", provider);
const fun = new ethers.Contract(
  '0x00643b55F65D54aE7144c6a5dcc74A29472F97d8',
  funContractInterface,
  wallet
);
// https://docs.ethers.io/v5/api/signer/#Wallet
export default function handler(req, res) {
  switch (req.method) {
    case "GET":

      fun.getFun(10)
        .then((transaction) => res.status(200).json({ "transaction": transaction }))
        .catch((e) => res.status(405).json({ "error": e }));
      break;
    case "PATCH":
      // Nuestra lógica de código para el método PATCH...
      break;
    case "DELETE":
      // Nuestra lógica de código para el método DELETE...
      break;
    default:
      res.status(405).json({
        mensaje: `El método HTTP ${req.method} no esta disponible en esta ruta`,
      });
      break;
  }

}
