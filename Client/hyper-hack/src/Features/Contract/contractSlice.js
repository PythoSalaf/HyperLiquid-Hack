import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicClient, walletClient } from "../../utils/viemClient";
import { contractABI, contractAddress } from "../../components/contractConfig";
import { createWalletClient, custom } from "viem";
import { sepolia } from "viem/chains";

const Wallet_Client_2 = createWalletClient({
  chain: sepolia,
  transport: custom(window.ethereum),
});

// Initial state
const initialState = {
  guildIds: [],
  guilds: [],
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

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
        console.log("Guild data fetched:", {
          guildId,
          guild: guildData[0],
          proposals: guildData[1],
        });
        guilds.push({ guildId, guild: guildData[0], proposals: guildData[1] });
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
      const walletClientInstance = walletClient(wallet);
      const Hash = await Wallet_Client_2.writeContract({
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

      const hash = await walletClientInstance.writeContract(request);
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
      const walletClientInstance = walletClient(wallet);
      const Hash = await Wallet_Client_2.writeContract({
        address: contractAddress,
        abi: contractABI,
        functionName: "joinGuild",
        args: [guildId, memberName],
        account: auth.address,
        value: entryThreshold,
      });

      const hash = await walletClientInstance.writeContract(request);
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
        state.guilds = action.payload;
        console.log("Guilds stored in state:", action.payload);
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
      });
  },
});

export const { resetContractState } = contractSlice.actions;
export default contractSlice.reducer;
