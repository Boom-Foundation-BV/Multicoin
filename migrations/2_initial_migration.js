var Multicoin = artifacts.require("./Multicoin.sol");

module.exports = function(deployer) {
  deployer.deploy(Multicoin);
};
