![image](assets/logo-multiven.png)

# Multiven Token Smart-Contract

## Multicoin Contract

The Multicoin contract is a standard ERC20 token :
 - name: Multicoin
 - symbol: MTC
 - decimals: 18
 - total supply : 2 billions

Additional features :

 - The contract has an owner.
 - Anyone can burn it's own tokens.
 

## Playing with the contract

You will need NodeJS, npm , truffle and open-zepplin contracts

You will need a local blockchain (like ganache) for local deployment

You will also need truffle-hdwallet-provider to deploy contract with metamask and infura 

```git clone https://github.com/Multiven-Group-BV/Multicoin
cd Multicoin
npm install -g truffle
npm install -E openzeppelin-solidity
npm install truffle-hdwallet-provider
truffle compile
truffle deploy
truffle test
```

## Ropsten 
Address of the contract : 0x1D966850F3058151F81Cd025D859Ec5dB3Cc6421

https://ropsten.etherscan.io/address/0x1d966850f3058151f81cd025d859ec5db3cc6421

https://ropsten.etherscan.io/token/0x1d966850f3058151f81cd025d859ec5db3cc6421
