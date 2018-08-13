pragma solidity ^0.4.24;


import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/BurnableToken.sol';

/**
 * Multiven Token : Multicoin
**/

contract Multicoin is Ownable,BurnableToken {
  
  string public constant name="MultiCoin";
  string public constant symbol="MTC";
  uint8 public constant decimals=18;
  
  uint256 public constant INITIAL_SUPPLY = 2000000000 * ( 10 ** uint256(decimals) );  
  
  constructor() public {

    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = totalSupply_;
    emit Transfer(address(0), msg.sender, INITIAL_SUPPLY);

  }

}

