#!/bin/bash
 
set -e
 
ganache-cli 2> /dev/null 1> /dev/null &
sleep 5 # to make sure ganache-cli is up and running before compiling
rm -rf build
truffle test
./node_modules/.bin/solidity-coverage
kill -9 $(lsof -t -i:8545)
