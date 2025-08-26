// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { publicClient, walletClient } from "../../utils/viemClient";
// import { contractABI, contractAddress } from "../../components/contractConfig";
// import { createWalletClient, custom } from "viem";
// import { sepolia } from "viem/chains";

// const Wallet_Client_2 = createWalletClient({
//   chain: sepolia,
//   transport: custom(window.ethereum),
// });

// // Initial state
// const initialState = {
//   guildIds: [],
//   guilds: [],
//   status: "idle", // idle | loading | succeeded | failed
//   error: null,
// };

// export const fetchGuildIds = createAsyncThunk(
//   "contract/fetchGuildIds",
//   async (_, { rejectWithValue }) => {
//     try {
//       console.log("Fetching guild IDs from contract:", contractAddress);
//       const guildIds = await publicClient.readContract({
//         address: contractAddress,
//         abi: contractABI,
//         functionName: "GuildIds",
//       });
//       console.log("Guild IDs fetched:", guildIds);
//       return guildIds;
//     } catch (error) {
//       console.error("Failed to fetch guild IDs:", error);
//       return rejectWithValue(
//         error.message || "Unknown error fetching guild IDs"
//       );
//     }
//   }
// );

// export const fetchGuildData = createAsyncThunk(
//   "contract/fetchGuildData",
//   async (guildIds, { rejectWithValue }) => {
//     try {
//       if (!guildIds || guildIds.length === 0) {
//         console.log("No guild IDs provided, returning empty guilds");
//         return [];
//       }
//       console.log("Fetching guild data for IDs:", guildIds);
//       const guilds = [];
//       for (const guildId of guildIds) {
//         console.log("Fetching data for guild ID:", guildId);
//         const guildData = await publicClient.readContract({
//           address: contractAddress,
//           abi: contractABI,
//           functionName: "GuildData",
//           args: [guildId],
//         });
//         console.log("Guild data fetched:", {
//           guildId,
//           guild: guildData[0],
//           proposals: guildData[1],
//         });
//         guilds.push({ guildId, guild: guildData[0], proposals: guildData[1] });
//       }
//       console.log("All guild data fetched:", guilds);
//       return guilds;
//     } catch (error) {
//       console.error("Failed to fetch guild data:", error);
//       return rejectWithValue(
//         error.message || "Unknown error fetching guild data"
//       );
//     }
//   }
// );

// export const createGuild = createAsyncThunk(
//   "contract/createGuild",
//   async (
//     {
//       creatorName,
//       guildName,
//       description,
//       memberCap,
//       entryThreshold,
//       riskThreshold,
//       wallet,
//     },
//     { getState, rejectWithValue }
//   ) => {
//     try {
//       const { auth } = getState();
//       if (!auth.authenticated || !auth.address) {
//         throw new Error("User not authenticated");
//       }
//       if (!wallet) {
//         throw new Error("No wallet connected");
//       }

//       console.log("Creating guild with params:", {
//         creatorName,
//         guildName,
//         description,
//         memberCap,
//         entryThreshold,
//         riskThreshold,
//       });
//       const walletClientInstance = walletClient(wallet);
//       const Hash = await Wallet_Client_2.writeContract({
//         address: contractAddress,
//         abi: contractABI,
//         functionName: "createGuild",
//         args: [
//           creatorName,
//           guildName,
//           description,
//           memberCap,
//           entryThreshold,
//           riskThreshold,
//         ],
//         account: auth.address,
//         value: entryThreshold,
//       });

//       const hash = await walletClientInstance.writeContract(request);
//       console.log("Transaction hash:", hash);
//       const receipt = await publicClient.waitForTransactionReceipt({ hash });
//       console.log("Transaction receipt:", receipt);
//       return receipt;
//     } catch (error) {
//       console.error("Failed to create guild:", error);
//       return rejectWithValue(error.message || "Unknown error creating guild");
//     }
//   }
// );

// export const joinGuild = createAsyncThunk(
//   "contract/joinGuild",
//   async (
//     { guildId, memberName, entryThreshold, wallet },
//     { getState, rejectWithValue }
//   ) => {
//     try {
//       const { auth } = getState();
//       if (!auth.authenticated || !auth.address) {
//         throw new Error("User not authenticated");
//       }
//       if (!wallet) {
//         throw new Error("No wallet connected");
//       }

//       console.log("Joining guild with params:", {
//         guildId,
//         memberName,
//         entryThreshold,
//       });
//       const walletClientInstance = walletClient(wallet);
//       const Hash = await Wallet_Client_2.writeContract({
//         address: contractAddress,
//         abi: contractABI,
//         functionName: "joinGuild",
//         args: [guildId, memberName],
//         account: auth.address,
//         value: entryThreshold,
//       });

//       const hash = await walletClientInstance.writeContract(request);
//       console.log("Transaction hash:", hash);
//       const receipt = await publicClient.waitForTransactionReceipt({ hash });
//       console.log("Transaction receipt:", receipt);
//       return receipt;
//     } catch (error) {
//       console.error("Failed to join guild:", error);
//       return rejectWithValue(error.message || "Unknown error joining guild");
//     }
//   }
// );

// export const proposeTrade = createAsyncThunk(
//   "contract/proposeTrade",
//   async (
//     { guildId, amount, description, wallet },
//     { getState, rejectWithValue }
//   ) => {
//     try {
//       const { auth } = getState();
//       if (!auth.authenticated || !auth.address) {
//         throw new Error("User not authenticated");
//       }
//       if (!wallet) {
//         throw new Error("No wallet connected");
//       }

//       console.log("Proposing trade with params:", {
//         guildId,
//         amount,
//         description,
//       });

//       const request = await Wallet_Client_2.prepareWriteContract({
//         address: contractAddress,
//         abi: contractABI,
//         functionName: "proposeTrade",
//         args: [guildId, amount, description],
//         account: auth.address,
//       });

//       const hash = await Wallet_Client_2.writeContract(request);
//       console.log("Transaction hash:", hash);
//       const receipt = await publicClient.waitForTransactionReceipt({ hash });
//       console.log("Transaction receipt:", receipt);
//       return receipt;
//     } catch (error) {
//       console.error("Failed to propose trade:", error);
//       return rejectWithValue(error.message || "Unknown error proposing trade");
//     }
//   }
// );

// export const topUpStake = createAsyncThunk(
//   "contract/topUpStake",
//   async ({ guildId, amount, wallet }, { getState, rejectWithValue }) => {
//     try {
//       const { auth } = getState();
//       if (!auth.authenticated || !auth.address) {
//         throw new Error("User not authenticated");
//       }
//       if (!wallet) {
//         throw new Error("No wallet connected");
//       }
//       if (amount <= 0) {
//         throw new Error("Invalid amount");
//       }

//       console.log("Topping up stake with params:", { guildId, amount });

//       const request = await Wallet_Client_2.prepareWriteContract({
//         address: contractAddress,
//         abi: contractABI,
//         functionName: "topUpStake",
//         args: [guildId],
//         account: auth.address,
//         value: amount,
//       });

//       const hash = await Wallet_Client_2.writeContract(request);
//       console.log("Transaction hash:", hash);
//       const receipt = await publicClient.waitForTransactionReceipt({ hash });
//       console.log("Transaction receipt:", receipt);
//       return receipt;
//     } catch (error) {
//       console.error("Failed to top up stake:", error);
//       return rejectWithValue(error.message || "Unknown error topping up stake");
//     }
//   }
// );

// export const voteProposal = createAsyncThunk(
//   "contract/voteProposal",
//   async (
//     { guildId, proposalId, voteYes, wallet },
//     { getState, rejectWithValue }
//   ) => {
//     try {
//       const { auth } = getState();
//       if (!auth.authenticated || !auth.address) {
//         throw new Error("User not authenticated");
//       }
//       if (!wallet) {
//         throw new Error("No wallet connected");
//       }

//       console.log("Voting on proposal with params:", {
//         guildId,
//         proposalId,
//         voteYes,
//       });

//       const request = await Wallet_Client_2.prepareWriteContract({
//         address: contractAddress,
//         abi: contractABI,
//         functionName: "voteProposal",
//         args: [guildId, proposalId, voteYes],
//         account: auth.address,
//       });

//       const hash = await Wallet_Client_2.writeContract(request);
//       console.log("Transaction hash:", hash);
//       const receipt = await publicClient.waitForTransactionReceipt({ hash });
//       console.log("Transaction receipt:", receipt);
//       return receipt;
//     } catch (error) {
//       console.error("Failed to vote on proposal:", error);
//       return rejectWithValue(
//         error.message || "Unknown error voting on proposal"
//       );
//     }
//   }
// );

// export const executeProposal = createAsyncThunk(
//   "contract/executeProposal",
//   async ({ proposalId, wallet }, { getState, rejectWithValue }) => {
//     try {
//       const { auth } = getState();
//       if (!auth.authenticated || !auth.address) {
//         throw new Error("User not authenticated");
//       }
//       if (!wallet) {
//         throw new Error("No wallet connected");
//       }

//       console.log("Executing proposal with params:", { proposalId });

//       const request = await Wallet_Client_2.prepareWriteContract({
//         address: contractAddress,
//         abi: contractABI,
//         functionName: "executeProposal",
//         args: [proposalId],
//         account: auth.address,
//       });

//       const hash = await Wallet_Client_2.writeContract(request);
//       console.log("Transaction hash:", hash);
//       const receipt = await publicClient.waitForTransactionReceipt({ hash });
//       console.log("Transaction receipt:", receipt);
//       return receipt;
//     } catch (error) {
//       console.error("Failed to execute proposal:", error);
//       return rejectWithValue(
//         error.message || "Unknown error executing proposal"
//       );
//     }
//   }
// );

// export const returnTradeFunds = createAsyncThunk(
//   "contract/returnTradeFunds",
//   async ({ proposalId, amount, wallet }, { getState, rejectWithValue }) => {
//     try {
//       const { auth } = getState();
//       if (!auth.authenticated || !auth.address) {
//         throw new Error("User not authenticated");
//       }
//       if (!wallet) {
//         throw new Error("No wallet connected");
//       }
//       if (amount <= 0) {
//         throw new Error("Invalid amount");
//       }

//       console.log("Returning trade funds with params:", { proposalId, amount });

//       const request = await Wallet_Client_2.prepareWriteContract({
//         address: contractAddress,
//         abi: contractABI,
//         functionName: "returnTradeFunds",
//         args: [proposalId],
//         account: auth.address,
//         value: amount,
//       });

//       const hash = await Wallet_Client_2.writeContract(request);
//       console.log("Transaction hash:", hash);
//       const receipt = await publicClient.waitForTransactionReceipt({ hash });
//       console.log("Transaction receipt:", receipt);
//       return receipt;
//     } catch (error) {
//       console.error("Failed to return trade funds:", error);
//       return rejectWithValue(
//         error.message || "Unknown error returning trade funds"
//       );
//     }
//   }
// );

// export const withdrawStake = createAsyncThunk(
//   "contract/withdrawStake",
//   async ({ guildId, wallet }, { getState, rejectWithValue }) => {
//     try {
//       const { auth } = getState();
//       if (!auth.authenticated || !auth.address) {
//         throw new Error("User not authenticated");
//       }
//       if (!wallet) {
//         throw new Error("No wallet connected");
//       }

//       console.log("Withdrawing stake with params:", { guildId });

//       const request = await Wallet_Client_2.prepareWriteContract({
//         address: contractAddress,
//         abi: contractABI,
//         functionName: "withdrawStake",
//         args: [guildId],
//         account: auth.address,
//       });

//       const hash = await Wallet_Client_2.writeContract(request);
//       console.log("Transaction hash:", hash);
//       const receipt = await publicClient.waitForTransactionReceipt({ hash });
//       console.log("Transaction receipt:", receipt);
//       return receipt;
//     } catch (error) {
//       console.error("Failed to withdraw stake:", error);
//       return rejectWithValue(
//         error.message || "Unknown error withdrawing stake"
//       );
//     }
//   }
// );

// const contractSlice = createSlice({
//   name: "contract",
//   initialState,
//   reducers: {
//     resetContractState: (state) => {
//       state.guildIds = [];
//       state.guilds = [];
//       state.status = "idle";
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchGuildIds.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchGuildIds.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.guildIds = action.payload;
//         console.log("Guild IDs stored in state:", action.payload);
//       })
//       .addCase(fetchGuildIds.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//         console.error("Guild IDs fetch error:", action.payload);
//       })
//       .addCase(fetchGuildData.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchGuildData.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.guilds = action.payload;
//         console.log("Guilds stored in state:", action.payload);
//       })
//       .addCase(fetchGuildData.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//         console.error("Guild data fetch error:", action.payload);
//       })
//       .addCase(createGuild.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(createGuild.fulfilled, (state) => {
//         state.status = "succeeded";
//       })
//       .addCase(createGuild.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })
//       .addCase(joinGuild.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(joinGuild.fulfilled, (state) => {
//         state.status = "succeeded";
//       })
//       .addCase(joinGuild.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })
//       .addCase(proposeTrade.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(proposeTrade.fulfilled, (state) => {
//         state.status = "succeeded";
//       })
//       .addCase(proposeTrade.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })
//       .addCase(topUpStake.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(topUpStake.fulfilled, (state) => {
//         state.status = "succeeded";
//       })
//       .addCase(topUpStake.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })
//       .addCase(voteProposal.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(voteProposal.fulfilled, (state) => {
//         state.status = "succeeded";
//       })
//       .addCase(voteProposal.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })
//       .addCase(executeProposal.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(executeProposal.fulfilled, (state) => {
//         state.status = "succeeded";
//       })
//       .addCase(executeProposal.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })
//       .addCase(returnTradeFunds.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(returnTradeFunds.fulfilled, (state) => {
//         state.status = "succeeded";
//       })
//       .addCase(returnTradeFunds.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })
//       .addCase(withdrawStake.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(withdrawStake.fulfilled, (state) => {
//         state.status = "succeeded";
//       })
//       .addCase(withdrawStake.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       });
//   },
// });

// export const { resetContractState } = contractSlice.actions;
// export default contractSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  hyperEvmTestnet,
  publicClient,
  walletClient,
} from "../../utils/viemClient";
import { contractABI, contractAddress } from "../../components/contractConfig";
import { createWalletClient, custom } from "viem";
// import { sepolia } from "viem/chains";
import { entryThresholdeth } from "../../utils/formatters";

const Wallet_Client_2 = createWalletClient({
  chain: hyperEvmTestnet,
  transport: custom(window.ethereum),
});

// Initial state
const initialState = {
  guildIds: [],
  guilds: [], // Each guild now includes a messages array
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

// Async thunks
export const fetchGuildIds = createAsyncThunk(
  "contract/fetchGuildIds",
  async (_, { rejectWithValue }) => {
    try {
      console.log("Fetching guild IDs from contract:", contractAddress);
      const guildIds = await publicClient.readContract({
        address: contractAddress,
        abi: contractABI,
        functionName: "GuildIds",
      });
      console.log("Guild IDs fetched:", guildIds);
      return guildIds;
    } catch (error) {
      console.error("Failed to fetch guild IDs:", error);
      return rejectWithValue(
        error.message || "Unknown error fetching guild IDs"
      );
    }
  }
);

// export const fetchGuildData = createAsyncThunk(
//   "contract/fetchGuildData",
//   async (guildIds, { rejectWithValue }) => {
//     try {
//       if (!guildIds || guildIds.length === 0) {
//         console.log("No guild IDs provided, returning empty guilds");
//         return [];
//       }
//       console.log("Fetching guild data for IDs:", guildIds);
//       const guilds = [];
//       for (const guildId of guildIds) {
//         console.log("Fetching data for guild ID:", guildId);
//         const guildData = await publicClient.readContract({
//           address: contractAddress,
//           abi: contractABI,
//           functionName: "GuildData",
//           args: [guildId],
//         });
//         console.log("Guild data fetched:", {
//           guildId,
//           guild: guildData[0],
//           proposals: guildData[1],
//         });
//         guilds.push({
//           guildId,
//           guild: guildData[0],
//           proposals: guildData[1],
//           messages: [], // Initialize empty messages array
//         });
//       }
//       console.log("All guild data fetched:", guilds);
//       return guilds;
//     } catch (error) {
//       console.error("Failed to fetch guild data:", error);
//       return rejectWithValue(
//         error.message || "Unknown error fetching guild data"
//       );
//     }
//   }
// );

export const fetchGuildData = createAsyncThunk(
  "contract/fetchGuildData",
  async (guildIds, { rejectWithValue }) => {
    try {
      if (!guildIds || guildIds.length === 0) {
        console.log("No guild IDs provided, returning empty guilds");
        return [];
      }
      console.log("Fetching guild data for IDs:", guildIds);
      const guilds = [];
      for (const guildId of guildIds) {
        console.log("Fetching data for guild ID:", guildId);
        const guildData = await publicClient.readContract({
          address: contractAddress,
          abi: contractABI,
          functionName: "GuildData",
          args: [guildId],
        });

        const serializedGuild = {
          ...guildData[0],
          createdAt: guildData[0].createdAt
            ? guildData[0].createdAt.toString()
            : undefined, // Serialize BigInt
          entryThreshold: guildData[0].entryThreshold
            ? guildData[0].entryThreshold.toString()
            : undefined, // Serialize BigInt
          riskThreshold: guildData[0].riskThreshold
            ? guildData[0].riskThreshold.toString()
            : undefined, // Serialize BigInt
          // Add other fields that may be BigInt
        };

        const serializedProposals = guildData[1].map((proposal) => ({
          ...proposal,
          amount: proposal.amount ? proposal.amount.toString() : undefined, // Serialize BigInt
          // Add other fields that may be BigInt
        }));

        console.log("Guild data fetched:", {
          guildId,
          guild: serializedGuild,
          proposals: serializedProposals,
        });

        guilds.push({
          guildId,
          guild: serializedGuild,
          proposals: serializedProposals,
          messages: [], // Initialize empty messages array
        });
      }
      console.log("All guild data fetched:", guilds);
      return guilds;
    } catch (error) {
      console.error("Failed to fetch guild data:", error);
      return rejectWithValue(
        error.message || "Unknown error fetching guild data"
      );
    }
  }
);

export const createGuild = createAsyncThunk(
  "contract/createGuild",
  async (
    {
      creatorName,
      guildName,
      description,
      memberCap,
      entryThreshold,
      riskThreshold,
      wallet,
    },
    { getState, rejectWithValue }
  ) => {
    try {
      const { auth } = getState();
      if (!auth.authenticated || !auth.address) {
        throw new Error("User not authenticated");
      }
      if (!wallet) {
        throw new Error("No wallet connected");
      }

      console.log("Creating guild with params:", {
        creatorName,
        guildName,
        description,
        memberCap,
        entryThreshold,
        riskThreshold,
      });
      // const walletClientInstance = walletClient(wallet);
      const hash = await Wallet_Client_2.writeContract({
        address: contractAddress,
        abi: contractABI,
        functionName: "createGuild",
        args: [
          creatorName,
          guildName,
          description,
          memberCap,
          entryThreshold,
          riskThreshold,
        ],
        account: auth.address,
        value: entryThreshold,
      });

      // const hash = await Wallet_Client_2.writeContract(request);
      console.log("Transaction hash:", hash);
      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      console.log("Transaction receipt:", receipt);
      return receipt;
    } catch (error) {
      console.error("Failed to create guild:", error);
      return rejectWithValue(error.message || "Unknown error creating guild");
    }
  }
);

export const joinGuild = createAsyncThunk(
  "contract/joinGuild",
  async (
    { guildId, memberName, entryThreshold, wallet },
    { getState, rejectWithValue }
  ) => {
    try {
      const { auth } = getState();
      if (!auth.authenticated || !auth.address) {
        throw new Error("User not authenticated");
      }
      if (!wallet) {
        throw new Error("No wallet connected");
      }

      console.log("Joining guild with params:", {
        guildId,
        memberName,
        entryThreshold,
      });
      // const walletClientInstance = walletClient(wallet);
      const hash = await Wallet_Client_2.writeContract({
        address: contractAddress,
        abi: contractABI,
        functionName: "joinGuild",
        args: [guildId, memberName],
        account: auth.address,
        value: entryThreshold,
      });

      // const hash = await Wallet_Client_2.writeContract(request);
      console.log("Transaction hash:", hash);
      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      console.log("Transaction receipt:", receipt);
      return receipt;
    } catch (error) {
      console.error("Failed to join guild:", error);
      return rejectWithValue(error.message || "Unknown error joining guild");
    }
  }
);

export const proposeTrade = createAsyncThunk(
  "contract/proposeTrade",
  async (
    { guildId, amount, description, wallet },
    { getState, rejectWithValue, dispatch }
  ) => {
    try {
      const { auth } = getState();
      if (!auth.authenticated || !auth.address) {
        throw new Error("User not authenticated");
      }
      if (!wallet) {
        throw new Error("No wallet connected");
      }

      console.log("Proposing trade with params:", {
        guildId,
        amount,
        description,
      });

      const hash = await Wallet_Client_2.writeContract({
        address: contractAddress,
        abi: contractABI,
        functionName: "proposeTrade",
        args: [guildId, amount, description],
        account: auth.address,
      });

      // const hash = await Wallet_Client_2.writeContract(request);
      console.log("Transaction hash:", hash);
      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      console.log("Transaction receipt:", receipt);

      // Simulate proposal data (since contract doesn't return proposalId directly)
      const proposalId = Date.now(); // Temporary ID; ideally, fetch from contract event
      const proposal = {
        id: `proposal-${proposalId}`,
        user: auth.address,
        content: `New trade proposed: ${description} for ${entryThresholdeth(
          amount
        )} ETH`,
        type: "proposal",
        proposalId,
        trader: auth.address,
        amount,
        descript: description,
        yesVotes: 0,
        totalVotes: 0,
        voters: [],
        approved: false,
        executed: false,
        fulfilled: false,
        timestamp: new Date().toISOString(),
      };

      // Add proposal to messages
      dispatch(addMessage({ guildId, message: proposal }));

      return receipt;
    } catch (error) {
      console.error("Failed to propose trade:", error);
      return rejectWithValue(error.message || "Unknown error proposing trade");
    }
  }
);

export const topUpStake = createAsyncThunk(
  "contract/topUpStake",
  async ({ guildId, amount, wallet }, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      if (!auth.authenticated || !auth.address) {
        throw new Error("User not authenticated");
      }
      if (!wallet) {
        throw new Error("No wallet connected");
      }
      if (amount <= 0) {
        throw new Error("Invalid amount");
      }

      console.log("Topping up stake with params:", { guildId, amount });

      const hash = await Wallet_Client_2.writeContract({
        address: contractAddress,
        abi: contractABI,
        functionName: "topUpStake",
        args: [guildId],
        account: auth.address,
        value: amount,
      });

      // const hash = await Wallet_Client_2.writeContract(request);
      console.log("Transaction hash:", hash);
      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      console.log("Transaction receipt:", receipt);
      return receipt;
    } catch (error) {
      console.error("Failed to top up stake:", error);
      return rejectWithValue(error.message || "Unknown error topping up stake");
    }
  }
);

export const voteProposal = createAsyncThunk(
  "contract/voteProposal",
  async (
    { guildId, proposalId, voteYes, wallet },
    { getState, rejectWithValue, dispatch }
  ) => {
    try {
      const { auth } = getState();
      if (!auth.authenticated || !auth.address) {
        throw new Error("User not authenticated");
      }
      if (!wallet) {
        throw new Error("No wallet connected");
      }

      console.log("Voting on proposal with params:", {
        guildId,
        proposalId,
        voteYes,
      });

      const hash = await Wallet_Client_2.writeContract({
        address: contractAddress,
        abi: contractABI,
        functionName: "voteProposal",
        args: [guildId, proposalId, voteYes],
        account: auth.address,
      });

      // const hash = await Wallet_Client_2.writeContract(request);
      console.log("Transaction hash:", hash);
      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      console.log("Transaction receipt:", receipt);

      // Update message with vote
      dispatch(
        updateVote({
          guildId,
          proposalId,
          voteYes,
          voter: auth.address,
        })
      );

      return receipt;
    } catch (error) {
      console.error("Failed to vote on proposal:", error);
      return rejectWithValue(
        error.message || "Unknown error voting on proposal"
      );
    }
  }
);

export const executeProposal = createAsyncThunk(
  "contract/executeProposal",
  async (
    { proposalId, guildId, wallet },
    { getState, rejectWithValue, dispatch }
  ) => {
    try {
      const { auth } = getState();
      if (!auth.authenticated || !auth.address) {
        throw new Error("User not authenticated");
      }
      if (!wallet) {
        throw new Error("No wallet connected");
      }

      console.log("Executing proposal with params:", { proposalId });

      const hash = await Wallet_Client_2.writeContract({
        address: contractAddress,
        abi: contractABI,
        functionName: "executeProposal",
        args: [proposalId],
        account: auth.address,
      });

      // const hash = await Wallet_Client_2.writeContract(request);
      console.log("Transaction hash:", hash);
      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      console.log("Transaction receipt:", receipt);

      // Update message for executed proposal
      dispatch(updateProposalExecuted({ guildId, proposalId }));

      return receipt;
    } catch (error) {
      console.error("Failed to execute proposal:", error);
      return rejectWithValue(
        error.message || "Unknown error executing proposal"
      );
    }
  }
);

export const returnTradeFunds = createAsyncThunk(
  "contract/returnTradeFunds",
  async ({ proposalId, amount, wallet }, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      if (!auth.authenticated || !auth.address) {
        throw new Error("User not authenticated");
      }
      if (!wallet) {
        throw new Error("No wallet connected");
      }
      if (amount <= 0) {
        throw new Error("Invalid amount");
      }

      console.log("Returning trade funds with params:", { proposalId, amount });

      const request = await Wallet_Client_2.prepareWriteContract({
        address: contractAddress,
        abi: contractABI,
        functionName: "returnTradeFunds",
        args: [proposalId],
        account: auth.address,
        value: amount,
      });

      const hash = await Wallet_Client_2.writeContract(request);
      console.log("Transaction hash:", hash);
      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      console.log("Transaction receipt:", receipt);
      return receipt;
    } catch (error) {
      console.error("Failed to return trade funds:", error);
      return rejectWithValue(
        error.message || "Unknown error returning trade funds"
      );
    }
  }
);

export const withdrawStake = createAsyncThunk(
  "contract/withdrawStake",
  async ({ guildId, wallet }, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      if (!auth.authenticated || !auth.address) {
        throw new Error("User not authenticated");
      }
      if (!wallet) {
        throw new Error("No wallet connected");
      }

      console.log("Withdrawing stake with params:", { guildId });

      const request = await Wallet_Client_2.prepareWriteContract({
        address: contractAddress,
        abi: contractABI,
        functionName: "withdrawStake",
        args: [guildId],
        account: auth.address,
      });

      const hash = await Wallet_Client_2.writeContract(request);
      console.log("Transaction hash:", hash);
      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      console.log("Transaction receipt:", receipt);
      return receipt;
    } catch (error) {
      console.error("Failed to withdraw stake:", error);
      return rejectWithValue(
        error.message || "Unknown error withdrawing stake"
      );
    }
  }
);

const contractSlice = createSlice({
  name: "contract",
  initialState,
  reducers: {
    resetContractState: (state) => {
      state.guildIds = [];
      state.guilds = [];
      state.status = "idle";
      state.error = null;
    },
    addMessage: (state, action) => {
      const { guildId, message } = action.payload;
      const guild = state.guilds.find((g) => g.guildId === guildId);
      if (guild) {
        guild.messages = [...(guild.messages || []), message];
      }
    },
    updateVote: (state, action) => {
      const { guildId, proposalId, voteYes, voter } = action.payload;
      const guild = state.guilds.find((g) => g.guildId === guildId);
      if (guild) {
        guild.messages = guild.messages.map((msg) =>
          msg.type === "proposal" && msg.proposalId === proposalId
            ? {
                ...msg,
                yesVotes: voteYes ? msg.yesVotes + 1 : msg.yesVotes,
                totalVotes: msg.totalVotes + 1,
                voters: [...msg.voters, voter],
                approved:
                  guild.guild.memberAddresses.length === 2 &&
                  voteYes &&
                  msg.yesVotes + 1 === 2
                    ? true
                    : guild.guild.memberAddresses.length > 2 &&
                      msg.totalVotes + 1 >
                        guild.guild.memberAddresses.length / 2 &&
                      msg.yesVotes + (voteYes ? 1 : 0) >
                        (msg.totalVotes + 1) / 2
                    ? true
                    : msg.approved,
              }
            : msg
        );
      }
    },
    updateProposalExecuted: (state, action) => {
      const { guildId, proposalId } = action.payload;
      const guild = state.guilds.find((g) => g.guildId === guildId);
      if (guild) {
        guild.messages = guild.messages.map((msg) =>
          msg.type === "proposal" && msg.proposalId === proposalId
            ? {
                ...msg,
                executed: true,
                content: `Trade executed: ${
                  msg.descript
                } for ${entryThresholdeth(msg.amount)} ETH`,
              }
            : msg
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGuildIds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGuildIds.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.guildIds = action.payload;
        console.log("Guild IDs stored in state:", action.payload);
      })
      .addCase(fetchGuildIds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        console.error("Guild IDs fetch error:", action.payload);
      })
      .addCase(fetchGuildData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGuildData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Merge existing messages with new guild data
        state.guilds = action.payload.map((newGuild) => {
          const existingGuild = state.guilds.find(
            (g) => g.guildId === newGuild.guildId
          );
          return {
            ...newGuild,
            messages: existingGuild ? existingGuild.messages || [] : [],
          };
        });
        console.log("Guilds stored in state:", state.guilds);
      })
      .addCase(fetchGuildData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        console.error("Guild data fetch error:", action.payload);
      })
      .addCase(createGuild.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createGuild.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(createGuild.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(joinGuild.pending, (state) => {
        state.status = "loading";
      })
      .addCase(joinGuild.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(joinGuild.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(proposeTrade.pending, (state) => {
        state.status = "loading";
      })
      .addCase(proposeTrade.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(proposeTrade.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(topUpStake.pending, (state) => {
        state.status = "loading";
      })
      .addCase(topUpStake.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(topUpStake.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(voteProposal.pending, (state) => {
        state.status = "loading";
      })
      .addCase(voteProposal.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(voteProposal.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(executeProposal.pending, (state) => {
        state.status = "loading";
      })
      .addCase(executeProposal.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(executeProposal.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(returnTradeFunds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(returnTradeFunds.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(returnTradeFunds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(withdrawStake.pending, (state) => {
        state.status = "loading";
      })
      .addCase(withdrawStake.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(withdrawStake.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const {
  resetContractState,
  addMessage,
  updateVote,
  updateProposalExecuted,
} = contractSlice.actions;
export default contractSlice.reducer;
