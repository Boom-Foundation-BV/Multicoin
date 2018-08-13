

var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // match any network
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider("https://ropsten.infura.io",0)
      },
      network_id: 3, // for testnet, 1 for mainnet
      gas: 4612388
    }   
  }
};
