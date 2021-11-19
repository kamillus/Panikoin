pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Panikoin is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("Panikoin", "PNIK") {
        _mint(msg.sender, initialSupply);
    }

    function mintMoar(uint256 amount) public onlyOwner {
        _mint(owner(), amount);
    }

    function panikBurn(uint256 amount) public onlyOwner {
        _burn(owner(), amount);
    }

    function decimals() public view virtual override returns (uint8) {
        return 5;
    }
}