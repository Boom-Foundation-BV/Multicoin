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

You will need a local blockchain (like ganache) for local deployment

You will also need truffle-hdwallet-provider to deploy contract with metamask and infura 

```
git clone https://github.com/Multiven-Group-BV/Multicoin
cd Multicoin
npm install -g truffle
npm install -E openzeppelin-solidity
npm install truffle-hdwallet-provider
truffle compile
truffle deploy
truffle test
```

## Ropsten 
Address of the contract : 0x76f4eF3267C32667C40F06B06068726A9F8859A9

https://ropsten.etherscan.io/address/0x76f4eF3267C32667C40F06B06068726A9F8859A9

https://ropsten.etherscan.io/token/0x76f4eF3267C32667C40F06B06068726A9F8859A9
