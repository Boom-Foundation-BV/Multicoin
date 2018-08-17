pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Multicoin.sol";

contract TestMulticoin {
  /*
  function testInitialBalanceUsingDeployedContract() {
    MetaCoin meta = MetaCoin(DeployedAddresses.MetaCoin());

    uint256 expected = 2 000 000 000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 MetaCoin initially");
  }
*/
  function testName() public {
    Multicoin mtc = new Multicoin();

    string memory name = mtc.name();
    
    string memory expected = "Multicoin";
    
    
    Assert.equal(name,expected, "Name should be 'Multicoin' ");
  }

  function testSymbol() public {
    Multicoin mtc = new Multicoin();

    string memory symbol = mtc.symbol();
    
    string memory expected = "MTCN";
    
    
    Assert.equal(symbol,expected, "Symbol should be 'MTCN' ");
  }

  function testDecimals() public {
    Multicoin mtc = new Multicoin();

    uint deci = mtc.decimals();
    
    uint expected = 18;
    
    
    Assert.equal(deci,expected, "Decimals should be '18' ");
  }

  function testInitialSupply() public {
    Multicoin mtc = new Multicoin();

    uint256 ini_supply = mtc.INITIAL_SUPPLY();
    
    uint8 deci = 18;
    
    uint256 expected = 2000000000*(10**uint256(deci));
    
    
    Assert.equal(ini_supply,expected, "Initial supply should be 2 billions ");
  }

  function testIamOwner() public {
    Multicoin mtc = new Multicoin();

    address guy = mtc.owner();
    Assert.equal(guy, address(this), "Owner should be me");
  }

  function testInitialBalanceWithNewMulticoin() public {
    Multicoin mtc = new Multicoin();

    uint8 deci = 18;
    
    uint expected = 2000000000*(10**uint256(deci));

    address guy = mtc.owner();
    Assert.equal(mtc.balanceOf(guy), expected, "Owner should have 2 billions Multicoin initially");
  }

function testMyBalance() public {
    Multicoin mtc = new Multicoin();

    uint8 deci = 18;
    
    uint expected = 2000000000*(10**uint256(deci));

    Assert.equal(mtc.balanceOf(address(this)), expected, "I should have 2 billions Multicoin initially");
  }

  function testTransfer() public {
    Multicoin mtc = new Multicoin();

    uint8 deci = 18;
    mtc.transfer(0x7Cee9a509b98CA22b30491330817D7Aa1677d5A2,10*(10**uint256(deci)));
    
    uint expected = 2000000000*(10**uint256(deci)) - 10*(10**uint256(deci));

    address guy = mtc.owner();
    Assert.equal(mtc.balanceOf(guy), expected, "Owner should have 2 billions Multicoin minus 10 transfered");
  }

  function testTransfertReception() public {
    Multicoin mtc = new Multicoin();

    uint8 deci = 18;
    mtc.transfer(0x7Cee9a509b98CA22b30491330817D7Aa1677d5A2,10*(10**uint256(deci)));
    
    uint amount = 10*(10**uint256(deci));
    Assert.equal(mtc.balanceOf(0x7Cee9a509b98CA22b30491330817D7Aa1677d5A2), amount, "Adress '0x7Cee9a509b98CA22b30491330817D7Aa1677d5A2' should have 10 Multicoin");
  }

  function testBurn() public {
    Multicoin mtc = new Multicoin();

    uint8 deci = 18;
    mtc.burn(10*(10**uint256(deci)));
    
    uint expected = 2000000000*(10**uint256(deci)) - 10*(10**uint256(deci));

    address guy = mtc.owner();
    Assert.equal(mtc.balanceOf(guy), expected, "Owner should have 2 billions Multicoin minus 10 burned");
  }

  
}

