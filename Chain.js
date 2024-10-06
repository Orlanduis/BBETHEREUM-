etherscan: {
  enable: true,
    apiKey: {
      buildbear: "0x2491b230baa58200b0c2857eab1bfd523be345b4",
    },
    customChains: [
      {
        network: "buildbear",
        chainId: 10,
        urls: {
          apiURL: "https://rpc.buildbear.io/verify/etherscan/esquivelfabian",
          browserURL: "https://esquivelfabian.blockscout.buildbear.io",
        },
      },
    ],
}
