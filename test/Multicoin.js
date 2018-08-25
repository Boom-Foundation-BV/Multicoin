const Multicoin = artifacts.require("Multicoin");

contract('2nd Multicoin test', async (accounts) => {

  it("should put 2B Multicoin in the address parameter", async () => {
     let decimals = 18;
     let instance = await Multicoin.new(accounts[0]);
     let balance = await instance.balanceOf(accounts[0]);
     assert.equal(balance.valueOf(), 2000000000 * ( 10 ** decimals));
  })

  it("should have name Multicoin", async () => {
     let instance = await Multicoin.new(accounts[0]);
     let name = await instance.name();
     let expected = "Multicoin";
     assert.equal(name, expected);
  })

  it("should have symbol MTCN", async () => {
     let instance = await Multicoin.new(accounts[0]);
     let symbol = await instance.symbol();
     let expected = "MTCN";
     assert.equal(symbol, expected);
  })

  it("should have decimals number equal 18 ", async () => {
     let instance = await Multicoin.new(accounts[0]);
     let decimals = await instance.decimals();
     let expected = 18;
     assert.equal(decimals, expected);
  })

  it("should have initial supply equal 2B ", async () => {
     let decimals = 18;
     let instance = await Multicoin.new(accounts[0]);
     let initial_supply = await instance.INITIAL_SUPPLY();
     let expected = 2000000000 * ( 10 ** decimals);
     assert.equal(initial_supply, expected);
  })
  
  it("should have address parameter (here 0x23F924D8E066d2733761ab5CBd7BAf53449c7eA1 as example) as owner and not address of sender ", async () => {
     let instance = await Multicoin.new(0x23F924D8E066d2733761ab5CBd7BAf53449c7eA1);
     let owner = await instance.owner();
     let expected = 0x23F924D8E066d2733761ab5CBd7BAf53449c7eA1;
     assert.equal(owner, expected);
  })

  it("owner should be able to burn coin correctly", async () => {


    let decimals = 18;
    let amount = 10 * ( 10 ** decimals);
    let account0 = accounts[0];

    let instance = await Multicoin.new(account0);
    let meta = instance;

    let balance = await meta.balanceOf(account0);
    let account_starting_balance = balance.toNumber();
    await meta.burn(amount, {from: account0});
    balance = await meta.balanceOf(account0);
    let account_ending_balance = balance.toNumber();


    assert.equal(account_ending_balance, account_starting_balance - amount, "Amount wasn't correctly burned from the sender");
  })
  
  it('owner should not be able to burn more he have', async () => {
    let meta = await Multicoin.new(accounts[0]);
    let err = null
    let decimals = 18;
    let amount = await meta.balanceOf(accounts[0]);
    try {
    await meta.burn(amount*2 , {from: accounts[0]});
    } catch (error) {
      err = error
    }

    assert.ok(err instanceof Error)
})

it('non owner should not be able to burn', async () => {
    let meta = await Multicoin.new(accounts[0]);
    let err = null
    let decimals = 18;
    let amount = 10 * ( 10 ** decimals);
    await meta.transfer(accounts[1], amount, {from: accounts[0]});
    try {
    await meta.burn(amount, {from: accounts[1]});
    } catch (error) {
      err = error
    }

    assert.ok(err instanceof Error)
})

it('you should not be able to send more than you have', async () => {
    let meta = await Multicoin.new(accounts[0]);
    let err = null
    let decimals = 18;
    let amount = 10 * ( 10 ** decimals);
    await meta.transfer(accounts[1], amount, {from: accounts[0]});
    try {
    await meta.transfer(accounts[2], amount*2 , {from: accounts[1]});
    } catch (error) {
      err = error
    }

    assert.ok(err instanceof Error)
})

  it("should send coin correctly", async () => {

    // Get initial balances of first and second account.
    let account_one = accounts[0];
    let account_two = accounts[1];
    let decimals = 18;
    let amount = 10 * ( 10 ** decimals);


    let instance = await Multicoin.new(accounts[0]);
    let meta = instance;

    let balance = await meta.balanceOf(account_one);
    let account_one_starting_balance = balance.toNumber();

    balance = await meta.balanceOf(account_two);
    let account_two_starting_balance = balance.toNumber();
    await meta.transfer(account_two, amount, {from: account_one});

    balance = await meta.balanceOf(account_one);
    let account_one_ending_balance = balance.toNumber();

    balance = await meta.balanceOf(account_two);
    let account_two_ending_balance = balance.toNumber();

    assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
    assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
  });

})
