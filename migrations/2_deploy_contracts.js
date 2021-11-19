const Panikoin = artifacts.require("Panikoin");

module.exports = function(deployer) {
  deployer.deploy(Panikoin, BigInt(10**12));
};