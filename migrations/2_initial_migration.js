const argv = require('minimist')(process.argv.slice(2), {string: ['multiven_address']});

multi = argv['multiven_address']
if(typeof multi === "undefined"){
  multi = "0x0";
}
var Multicoin = artifacts.require("./Multicoin.sol");

module.exports = function(deployer) {
  console.log("----migration multiven address: ",multi);
  deployer.deploy(Multicoin,multi);
};

