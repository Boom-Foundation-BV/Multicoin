![image](assets/logo-multiven.png)

[![Build Status](https://travis-ci.org/Multiven-Group-BV/Multicoin.svg?branch=master)](https://travis-ci.org/Multiven-Group-BV/Multicoin)
[![Coverage Status](https://coveralls.io/repos/github/Multiven-Group-BV/Multicoin/badge.svg?branch=master)](https://coveralls.io/github/Multiven-Group-BV/Multicoin?branch=master)
# Multiven Token Smart-Contract

## Multicoin Contract

The Multicoin contract is a standard ERC-20 token:
 - name: Multicoin
 - symbol: MTCN
 - decimals: 18
 - total supply : 2 billion

Additional features :

 - The contract has an owner.
 - Contract owner can burn unsold tokens.
 

## Playing with the contract

You will need NodeJS, npm , truffle and open-zepplin contracts

You will need a local blockchain (like ganache) for local deployment and test

You will also need truffle-hdwallet-provider with a metamask mnemonic and an infura api key to deploy contract on Ropsten 

You will need solidity-coverage for code coverage

### Install

```
git clone https://github.com/Multiven-Group-BV/Multicoin
cd Multicoin
npm install -g truffle
npm install -g coveralls
npm install truffle-assertions (>=0.4.0)
npm install --save-dev solidity-coverage
npm install -E openzeppelin-solidity
npm install truffle-hdwallet-provider
```

### Compile
```
truffle compile
```
### Deploy on local network
(start local blockchain on port 8545)
```
truffle deploy --multiven_address "owner_address"
```

### Run tests
(start local blockchain on port 8545)
```
truffle test
```
### Run code coverage
```
npm run coverage
```
## Mainnet
* Address of the contract : 0xF6117cC92d7247F605F11d4c942F0feda3399CB5
* Etherscan Token link : https://etherscan.io/token/0xf6117cc92d7247f605f11d4c942f0feda3399cb5
* Etherscan Contract Link : https://etherscan.io/address/0xf6117cc92d7247f605f11d4c942f0feda3399cb5
