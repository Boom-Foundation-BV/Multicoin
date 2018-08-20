pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Multicoin.sol";

contract TestMulticoin {

  function testName() public {
    address testcontract = address(this);

    Multicoin mtc = new Multicoin(testcontract);

    string memory name = mtc.name();
    
    string memory expected = "Multicoin";
    
    
    Assert.equal(name,expected, "Name should be 'Multicoin' ");
  }

  function testSymbol() public {
    address testcontract = address(this);
  
    Multicoin mtc = new Multicoin(testcontract);

    string memory symbol = mtc.symbol();
    
    string memory expected = "MTCN";
    
    
    Assert.equal(symbol,expected, "Symbol should be 'MTCN' ");
  }

  function testDecimals() public {
    address testcontract = address(this);

    Multicoin mtc = new Multicoin(testcontract);

    uint deci = mtc.decimals();
    
    uint expected = 18;
    
    
    Assert.equal(deci,expected, "Decimals should be '18' ");
  }

  function testInitialSupply() public {
    address testcontract = address(this);

    Multicoin mtc = new Multicoin(testcontract);

    uint256 ini_supply = mtc.INITIAL_SUPPLY();
    
    uint8 deci = 18;
    
    uint256 expected = 2000000000*(10**uint256(deci));
    
    
    Assert.equal(ini_supply,expected, "Initial supply should be 2 billions ");
  }

  function testIamOwner() public {
    address testcontract = address(this);
  
    Multicoin mtc = new Multicoin(testcontract);

    address guy = mtc.owner();
    Assert.equal(guy, testcontract, "Owner should be me");
  }

  function testInitialBalanceWithNewMulticoin() public {
    address testcontract = address(this);

    Multicoin mtc = new Multicoin(testcontract);

    uint8 deci = 18;
    
    uint expected = 2000000000*(10**uint256(deci));

    address guy = mtc.owner();
    Assert.equal(mtc.balanceOf(guy), expected, "Owner should have 2 billions Multicoin initially");
  }

function testMyBalance() public {
    address testcontract = address(this);

    Multicoin mtc = new Multicoin(testcontract);

    uint8 deci = 18;
    
    uint expected = 2000000000*(10**uint256(deci));

    Assert.equal(mtc.balanceOf(testcontract), expected, "I should have 2 billions Multicoin initially");
  }

  function testTransfer() public {
    address testcontract = address(this);
  
    Multicoin mtc = new Multicoin(testcontract);

    uint8 deci = 18;
    mtc.transfer(0x7Cee9a509b98CA22b30491330817D7Aa1677d5A2,10*(10**uint256(deci)));
    
    uint expected = 2000000000*(10**uint256(deci)) - 10*(10**uint256(deci));

    address guy = mtc.owner();
    Assert.equal(mtc.balanceOf(guy), expected, "Owner should have 2 billions Multicoin minus 10 transfered");
  }

  function testTransfertReception() public {
    address testcontract = address(this);
  
    Multicoin mtc = new Multicoin(testcontract);

    uint8 deci = 18;
    mtc.transfer(0x7Cee9a509b98CA22b30491330817D7Aa1677d5A2,10*(10**uint256(deci)));
    
    uint amount = 10*(10**uint256(deci));
    Assert.equal(mtc.balanceOf(0x7Cee9a509b98CA22b30491330817D7Aa1677d5A2), amount, "Adress '0x7Cee9a509b98CA22b30491330817D7Aa1677d5A2' should have 10 Multicoin");
  }

  function testBurn() public {
    address testcontract = address(this);
  
    Multicoin mtc = new Multicoin(testcontract);

    uint8 deci = 18;
    mtc.burn(10*(10**uint256(deci)));
    
    uint expected = 2000000000*(10**uint256(deci)) - 10*(10**uint256(deci));

    address guy = mtc.owner();
    Assert.equal(mtc.balanceOf(guy), expected, "Owner should have 2 billions Multicoin minus 10 burned");
  }

  
}

