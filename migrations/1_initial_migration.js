const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
    // console.log(Migrations);
    console.log(deployer.provider);
    deployer.deploy(Migrations);
};
