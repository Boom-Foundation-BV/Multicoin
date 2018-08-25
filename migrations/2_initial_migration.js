const argv = require('minimist')(process.argv.slice(2), {string: ['multiven_address']});

multi = argv['multiven_address']
if(typeof multi === 'undefined'){
  multi = "0x0"; // for test only
}
else if(typeof multi !== 'string'){
        throw "Assertion failed : address should be a string (between quotes) to avoid javascript rounding bug";
}
var Multicoin = artifacts.require("./Multicoin.sol");

module.exports = function(deployer) {
  console.log("type of parameter multiven_address : ",typeof multi);
  console.log("----migration multiven address: ",multi);
  deployer.deploy(Multicoin,multi);
};

