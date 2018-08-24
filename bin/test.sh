#!/bin/bash
 
set -e
 
ganache-cli --gasLimit 5612388 2> /dev/null 1> /dev/null &
sleep 5 # to make sure ganache-cli is up and running before compiling
rm -rf build
truffle compile
truffle migrate --reset --network development --multiven_address "0x23F924D8E066d2733761ab5CBd7BAf53449c7eA1"
truffle test
kill -9 $(lsof -t -i:8545)
