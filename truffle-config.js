const HDWalletProvider = require('truffle-hdwallet-provider');
const path = require('path');
require('dotenv').config();

module.exports = {
  contracts_build_directory: path.join(__dirname, 'frontend/src/contracts'),

  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNEMONIC,
          `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}`
        ),
      gas: 4712388,
      gasPrice: 100000000000,
      network_id: '*'
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`
        );
      },
      network_id: '*'
    },
    sepolia: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNEMONIC, 
          `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`)
      },
      network_id: 11155111
    },
    truffleTestnet: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, `http://localhost:9545`);
      },
      network_id: '*'
    }
  }
};
