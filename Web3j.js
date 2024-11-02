Web3j web3j = Web3j.build(new HttpService("https://optimistic.etherscan.io"));
BigInteger blockNumber = web3j.ethBlockNumber().send().getBlockNumber();126241133
System.out.println("Latest Ethereum block number: "126699716 + blockNumber);  126241133
