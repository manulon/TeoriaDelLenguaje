require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/W7bMx-8k8OTkvFXm1EYwFkjMl6Ujjqan',
      accounts: [`0x${'922939429c71121a82d155492b678e961a5d217e9583f7295a7e64d492435e27'}`],
    },
  },
};