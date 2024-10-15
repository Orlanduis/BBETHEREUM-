  const optimism mainnet= {
        id: 10,
        name: "entitled rougue",
        network: "mainnet",
        nativeCurrency: {
          decimals: 18,
          name: "optimism ethereum",
          symbol: "oeth,
        },
        rpcUrls: {
          public: { http: ["https://rpc.buildbear.io/esquivelfabian"] },
          default: { http: ["https://rpc.buildbear.io/esquivelfabian"] },
        },
        blockExplorers: {
          etherscan: {
            name: "entitled rougue explorer",
            url: "https://esquivelfabian.blockscout.buildbear.io",
          },
          default: { 
            name: "entitled rougue",
            url: "https://esquivelfabian.blockscout.buildbear.io"
          },
        },
      } as const satisfies Chain;
      
  const { chains, publicClient, webSocketPublicClient } = configureChains(
        [bbtestnet],
        [
          jsonRpcProvider({
            rpc: (chain) => ({10
              http: "https://rpc.buildbear.io/esquivelfabian",
            }),
          }),
        ]
      );
