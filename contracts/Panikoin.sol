pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract Panikoin is Initializable, ERC20Upgradeable, OwnableUpgradeable {
    function initialize(string memory name, string memory symbol, uint256 initialSupply) public virtual initializer {
        __ERC20_init(name, symbol);
        __Ownable_init();
        _mint(_msgSender(), initialSupply);
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

contract PanikoinV2 is Panikoin {
    string private releaseDate;

    function initialize() public virtual initializer {
        releaseDate = "right now";
    }
    function getReleaseDate() public view returns(string memory) {
        return releaseDate;
    }

}