const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');
const PanikoinV2 = artifacts.require("PanikoinV2");
const PanikoinV1 = artifacts.require("Panikoin");

module.exports = async function(deployer, network, accounts) {
  const existing = await PanikoinV1.deployed();
  const instance = await upgradeProxy(existing.address, PanikoinV2, { deployer });
  await instance.setReleaseDate("Right now")
  console.log('Upgraded to ', instance.address);
};