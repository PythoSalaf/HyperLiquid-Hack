import { createPublicClient, createWalletClient, custom, http } from "viem";
import { sepolia } from "viem/chains";

// Alchemy RPC for read operations
const RPC_URL = "https://eth-sepolia.g.alchemy.com/v2/f_MQNN-kXFYVKr8d22fwh";

export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(RPC_URL),
});

export const walletClient = async (wallet) => {
  try {
    const provider = await wallet.getEthereumProvider();
    console.log("Privy provider available:", !!provider);
    const client = createWalletClient({
      chain: sepolia,
      transport: custom(provider),
      account: wallet.address,
    });
    console.log("WalletClient created with account:", client.account.address);
    return client;
  } catch (error) {
    console.error("Error creating walletClient:", error);
    throw new Error("Failed to initialize walletClient");
  }
};

// export const contractAddress = "0x7323ad85BFc66b199C13dBD292C49d10052688d2"
