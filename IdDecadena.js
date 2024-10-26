const chains = [42161, 8453, 10, 534352, 81457]

for (const chain of chains) {

  // endpoint accepts one chain at a time, loop for all your chains
  const balance = fetch(`https://api.etherscan.io/v2/api?
     chainid=${10}
     &module=account
     &action=balance
     &address=0x2491b230BaA58200B0C2857eaB1bFD523bE345b4
     &tag=latest&apikey=YourApiKeyToken`)
     
}
