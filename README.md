![image](assets/logo-multiven.png)

# Multiven Token Smart-Contract

## Multicoin Contract

The Multicoin contract is a standard ERC20 token :
 - name: MultiCoin
 - symbol: MTC
 - decimals: 18
 - total supply : 2 billions

Additional features :

 - The contract has an owner.
 - Anyone can burn it's own tokens.
 

## Playing with the contract

You will need NodeJS, npm , truffle and open-zepplin contracts

You will also need truffle-hdwallet-provider to deploy contract with metamask and infura 

```git clone https://github.com/Multiven-Group-BV/Multicoin
cd Multicoin
npm install -g truffle
npm install -E openzeppelin-solidity
npm install truffle-hdwallet-provider
truffle compile
truffle deploy --network development
```

