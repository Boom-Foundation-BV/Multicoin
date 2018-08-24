![image](assets/logo-multiven.png)

[![Build Status](https://travis-ci.org/Multiven-Group-BV/Multicoin.svg?branch=master)](https://travis-ci.org/Multiven-Group-BV/Multicoin)

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
./node_modules/.bin/solidity-coverage
```
## Ropsten 
Address of the contract : 0x33cf0a394744174ff1e96bc9eb63f9960c024e5c

https://ropsten.etherscan.io/address/0x33cf0a394744174ff1e96bc9eb63f9960c024e5c

https://ropsten.etherscan.io/token/0x33cf0a394744174ff1e96bc9eb63f9960c024e5c
