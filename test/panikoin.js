const Panikoin = artifacts.require("Panikoin");

contract('Panikoin', (accounts) => {
  it('should put 100000*10**18 Panikoin in the first account', async () => {
    BigInt.prototype.toJSON = function() { return this.toString(); };
    const instance = await Panikoin.deployed()
    const balance = await instance.balanceOf.call(accounts[0]);

    assert.equal(BigInt(balance.valueOf()), BigInt(10**12), "Incorrect amount in in the first account");
  });
  it('should send coin correctly', async () => {
    BigInt.prototype.toJSON = function() { return this.toString(); };
    const instance = await Panikoin.deployed();

    // Setup 2 accounts.
    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    // Get initial balances of first and second account.
    const accountOneStartingBalance = BigInt(await instance.balanceOf.call(accountOne));
    const accountTwoStartingBalance = BigInt(await instance.balanceOf.call(accountTwo));

    // Make transaction from first account to second.
    const amount = 10;
    await instance.transfer(accountTwo, amount);

    // Get balances of first and second account after the transactions.
    const accountOneEndingBalance = BigInt(await instance.balanceOf.call(accountOne));
    const accountTwoEndingBalance = BigInt(await instance.balanceOf.call(accountTwo));

    assert.equal(accountOneEndingBalance, accountOneStartingBalance - BigInt(amount), "Amount wasn't correctly taken from the sender");
    assert.equal(accountTwoEndingBalance, accountTwoStartingBalance + BigInt(amount), "Amount wasn't correctly sent to the receiver");
  });
  it('mints coins correctly', async () => {
    BigInt.prototype.toJSON = function() { return this.toString(); };
    const instance = await Panikoin.deployed()
    await instance.mintMoar(BigInt(5*10**5+10))
    balance = await instance.balanceOf.call(accounts[0])

    assert.equal(BigInt(balance), BigInt(1000000500000), "Incorrect amount in in the first account");
  });

  it('burns coins correctly', async () => {
    BigInt.prototype.toJSON = function() { return this.toString(); };
    const instance = await Panikoin.deployed()
    await instance.panikBurn(BigInt(5*10**5))
    balance = await instance.balanceOf.call(accounts[0])

    assert.equal(BigInt(balance), BigInt(1000000000000), "Incorrect amount in in the first account");
  });
});
