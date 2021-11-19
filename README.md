# Panikoin
# Useful commands

```javascript
truffle test
```

```javascript
instance = await Panikoin.deployed()
accounts = await web3.eth.getAccounts()
balance = await instance.balanceOf(accounts[0])
balance.toNumber()
instance.transfer(accounts[1], 1000)
```
```sh
truffle develop
truffle migrate --network development
truffle migrate --network matic
```
