const argv = require('minimist')(process.argv.slice(2), {string: ['multiven_address']});


var Multicoin = artifacts.require("./Multicoin.sol");

module.exports = function(deployer) {
  console.log("----migration multiven address: ",argv['multiven_address']);
  deployer.deploy(Multicoin,argv['multiven_address']);
};

