![image](assets/logo-multiven.png)

# Multiven Token Smart-Contract

## Multicoin Contract

The Multicoin contract is a standard ERC-20 token:
 - name: Multicoin
 - symbol: MTCN
 - decimals: 18
 - total supply : 2 billion

Additional features :

 - The contract has an owner.
 - Multiven can burn unsold tokens.
 

## Playing with the contract

You will need NodeJS, npm , truffle and open-zepplin contracts

You will need a local blockchain (like ganache) for local deployment and test

You will also need truffle-hdwallet-provider with a metamask mnemonic and an infura api key to deploy contract on Ropsten 

### Install

```
git clone https://github.com/Multiven-Group-BV/Multicoin
cd Multicoin
npm install -g truffle
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

### Deploy on Ropsten
(need an account with ropsten ether on it and an infura api key)
```
truffle deploy --multiven_address "owner_address"
```

### Run tests
(start local blockchain on port 8545)
```
truffle test --multiven_address "0x0"
```
## Ropsten 
Address of the contract : 0x33cf0a394744174ff1e96bc9eb63f9960c024e5c

https://ropsten.etherscan.io/address/0x33cf0a394744174ff1e96bc9eb63f9960c024e5c

https://ropsten.etherscan.io/token/0x33cf0a394744174ff1e96bc9eb63f9960c024e5c
