const DistributedFileSharingDapp = artifacts.require("DistributedFileSharingDapp");

module.exports = function(deployer) {
  deployer.deploy(DistributedFileSharingDapp);
};
