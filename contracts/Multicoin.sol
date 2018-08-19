pragma solidity ^0.4.24;


import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/StandardBurnableToken.sol';

/**
 * Multiven Token : Multicoin
 * ERC20 token + Ownable + Burnable
 * author : Mohamed Amine LEGHERABA
 * Multiven Group
 * https://www.multiven.io/
**/

contract Multicoin is Ownable,StandardBurnableToken {
  
  string public constant name="Multicoin";
  string public constant symbol="MTCN";
  uint8 public constant decimals=18;
  
  uint256 public constant INITIAL_SUPPLY = 2000000000 * ( 10 ** uint256(decimals) );  
  
  constructor(address multiven) public {
    owner = multiven;
    totalSupply_ = INITIAL_SUPPLY;
    balances[multiven] = totalSupply_;
    emit Transfer(address(0), multiven, INITIAL_SUPPLY);

  }
  
  function burn(uint256 _value) public onlyOwner {
    super.burn(_value);
  }
  
  function burnFrom(address _from, uint256 _value) public onlyOwner { 
    super.burnFrom(_from,_value);
  }
  
}

