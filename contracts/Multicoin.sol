pragma solidity ^0.4.24;


import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/BurnableToken.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

/**
 * Multiven Token : Multicoin
 * ERC20 token + Ownable + Burnable
 * author : Mohamed Amine LEGHERABA
 * Multiven Group
 * https://www.multiven.io/
**/

contract Multicoin is Ownable,BurnableToken,StandardToken {
  
  string public constant name="Multicoin";
  string public constant symbol="MTCN";
  uint8 public constant decimals=18;
  
  uint256 public constant INITIAL_SUPPLY = 2000000000 * ( 10 ** uint256(decimals) );  
  
  constructor() public {

    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = totalSupply_;
    emit Transfer(address(0), msg.sender, INITIAL_SUPPLY);

  }

}

