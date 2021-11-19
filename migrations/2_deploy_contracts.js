const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');
const Panikoin = artifacts.require("Panikoin");

module.exports = async function(deployer) {
  const instance = await deployProxy(Panikoin, ["Panikoin", "PNIK", BigInt(10**12)], { deployer, initializer: 'initialize' });
  console.log('Deployed', instance.address);
};