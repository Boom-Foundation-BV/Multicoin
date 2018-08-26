const Multicoin = artifacts.require("Multicoin");

const BigNumber = require('bignumber.js'); // needed because Ethereum number are too big
const truffleAssert = require('truffle-assertions'); // needed for emit event tests

contract('2nd Multicoin test', async (accounts) => {

  it("should put 2B Multicoin in the address parameter", async () => {
     let decimals = new BigNumber(18);
     
     let instance = await Multicoin.new(accounts[0],{from: accounts[0]});
     let tx = await truffleAssert.createTransactionResult(instance, instance.transactionHash);
     
     let balance = await instance.balanceOf(accounts[0],{from: accounts[0]});
     let amount = new BigNumber(2000000000);
     let expected = amount.times((new BigNumber(10)).pow(decimals));
     
     truffleAssert.eventEmitted(tx, 'Transfer', (ev) => {
         return ev.from === "0x0000000000000000000000000000000000000000" && ev.to === accounts[0]  && ev.value.toString() ===  expected.toString();
         }, 'Transfer event should be emitted during deployment');

     
     assert.equal(balance.toString(),expected.toString());  
  })

  it("should have name Multicoin", async () => {
     let instance = await Multicoin.new(accounts[0],{from: accounts[0]});
     let name = await instance.name();
     let expected = "Multicoin";
     assert.equal(name, expected);
  })

  it("should have symbol MTCN", async () => {
     let instance = await Multicoin.new(accounts[0],{from: accounts[0]});
     let symbol = await instance.symbol({from: accounts[0]});
     let expected = "MTCN";
     assert.equal(symbol, expected);
  })

  it("should have decimals number equal 18 ", async () => {
     let instance = await Multicoin.new(accounts[0],{from: accounts[0]});
     let decimals = await instance.decimals({from: accounts[0]});
     let expected = new BigNumber(18);
     assert.equal(decimals.toString(), expected.toString());
  })

  it("should have initial supply equal 2B ", async () => {
     let decimals = new BigNumber(18);
     let instance = await Multicoin.new(accounts[0],{from: accounts[0]});
     let initial_supply = await instance.INITIAL_SUPPLY({from: accounts[0]});
     let amount = new BigNumber(2000000000);
     let expected =  amount.times(new BigNumber(10).pow(decimals));
     assert.equal(initial_supply.toString(), expected.toString());
  })
  
  it("should have address parameter (here '0x23F924D8E066d2733761ab5CBd7BAf53449c7eA1' as example) as owner and not address of sender ", async () => {
     let decimals = new BigNumber(18);
     let instance = await Multicoin.new("0x23F924D8E066d2733761ab5CBd7BAf53449c7eA1",{from: accounts[0]});
     let tx = await truffleAssert.createTransactionResult(instance, instance.transactionHash);
          
     let owner_ = await instance.owner({from: accounts[0]});
     let owner = owner_.toLowerCase(); // with web3 1.0 you can use web3.utils.toChecksumAddress(value) but 1.0 is still in beta at 25/08/2018.

     let expected = "0x23F924D8E066d2733761ab5CBd7BAf53449c7eA1".toLowerCase();
     let balance = await instance.balanceOf("0x23F924D8E066d2733761ab5CBd7BAf53449c7eA1",{from: accounts[0]});
     
     let amount_ = new BigNumber(2000000000);
     let amount = amount_.times((new BigNumber(10)).pow(decimals));

     truffleAssert.eventEmitted(tx, 'Transfer', (ev) => {
         return ev.from === "0x0000000000000000000000000000000000000000" && ev.to === "0x23F924D8E066d2733761ab5CBd7BAf53449c7eA1".toLowerCase()  && ev.value.toString() ===  amount.toString();
         }, 'Transfer event should be emitted during deployment');


     assert.equal(typeof owner, 'string', "owner should be a string to avoid javascript number rounding");
     assert.equal(typeof expected, 'string', "expected should be a string to avoid javascript number rounding");
     assert.equal(owner, expected, "owner should be '0x23F924D8E066d2733761ab5CBd7BAf53449c7eA1' ");

     assert.equal(balance.toString(), amount, "owner '0x23F924D8E066d2733761ab5CBd7BAf53449c7eA1' should have all tokens");
  })

  it("owner should be able to burn coin correctly", async () => {


    let decimals = new BigNumber(18);
    let amount = (new BigNumber(10)).times( (new BigNumber(10)).pow(decimals));
    let account0 = accounts[0];

    let instance = await Multicoin.new(account0,{from: account0});
    let meta = instance;

    let account_starting_balance = await meta.balanceOf(account0,{from: account0});
    let tx = await meta.burn(amount, {from: account0});
    account_ending_balance = await meta.balanceOf(account0,{from: account0});


    truffleAssert.eventEmitted(tx, 'Transfer', (ev) => {
         return ev.from === account0 && ev.to === "0x0000000000000000000000000000000000000000" && ev.value.toString() ===  amount.toString();
         }, 'Transfer event should be emitted with correct parameters');

    truffleAssert.eventEmitted(tx, 'Burn', (ev) => {
         return ev.burner === account0 && ev.value.toString() === amount.toString();
         }, 'Burn event should be emitted with correct parameters');


    assert.equal(account_ending_balance.toString(), (account_starting_balance.minus(amount)).toString(), "Amount wasn't correctly burned from the sender");
  })
  
  it('owner should not be able to burn more he have', async () => {
    let meta = await Multicoin.new(accounts[0],{from: accounts[0]});
    let err = null;
    let decimals = new BigNumber(18);
    let amount = await meta.balanceOf(accounts[0],{from: accounts[0]});

    try {
      await meta.burn(amount.times(2) , {from: accounts[0]});
    } catch (error) {
      err = error
    }
    
    assert.ok(err instanceof Error)
})

it('non owner should not be able to burn', async () => {
    let meta = await Multicoin.new(accounts[0],{from: accounts[0]});
    let err = null;
    let decimals = new BigNumber(18);
    let amount = (new BigNumber(10)).times( (new BigNumber(10)).pow(decimals));
    let tx = await meta.transfer(accounts[1], amount, {from: accounts[0]});
    try {
      await meta.burn(amount, {from: accounts[1]});
    } catch (error) {
      err = error
    }
    
    truffleAssert.eventEmitted(tx, 'Transfer', (ev) => {
         return ev.from === accounts[0] && ev.to === accounts[1] && ev.value.toString() === amount.toString();
         }, 'Transfer event should be emitted with correct parameters');

    assert.ok(err instanceof Error)
})

it('you should not be able to send more than you have', async () => {
    let meta = await Multicoin.new(accounts[0],{from: accounts[0]});
    let err = null;
    let decimals = new BigNumber(18);
    let amount = (new BigNumber(10)).times((new BigNumber(10)).pow(decimals));
    let tx = await meta.transfer(accounts[1], amount, {from: accounts[0]});
    try {
      await meta.transfer(accounts[2], amount*2 , {from: accounts[1]});
    } catch (error) {
      err = error
    }
    truffleAssert.eventEmitted(tx, 'Transfer', (ev) => {
         return ev.from === accounts[0] && ev.to === accounts[1] && ev.value.toString() === amount.toString();
         }, 'Transfer event should be emitted with correct parameters');
    
    
    assert.ok(err instanceof Error)
})

  it("should send coin correctly", async () => {

    // Get initial balances of first and second account.
    let account_one = accounts[0];
    let account_two = accounts[1];
    let decimals = new BigNumber(18);
    let amount = (new BigNumber(10)).times((new BigNumber(10)).pow(decimals));


    let instance = await Multicoin.new(accounts[0],{from: accounts[0]});
    let meta = instance;

    let account_one_starting_balance = await meta.balanceOf(account_one);
    
    let account_two_starting_balance = await meta.balanceOf(account_two);
    
    let tx = await meta.transfer(account_two, amount, {from: account_one});

    let account_one_ending_balance = await meta.balanceOf(account_one,{from: accounts[0]});
    
    let account_two_ending_balance = await meta.balanceOf(account_two,{from: accounts[0]});
    
    truffleAssert.eventEmitted(tx, 'Transfer', (ev) => {
         return ev.from === account_one && ev.to === account_two && ev.value.toString() === amount.toString();
         }, 'Transfer event should be emitted with correct parameters');
    
    
    assert.equal(account_one_ending_balance.toString(), (account_one_starting_balance.minus(amount)).toString(), "Amount wasn't correctly taken from the sender");
    assert.equal(account_two_ending_balance.toString(), (account_two_starting_balance.plus(amount)).toString(), "Amount wasn't correctly sent to the receiver");
    
    //truffleAssert.prettyPrintEmittedEvents(tx);
  });

})
