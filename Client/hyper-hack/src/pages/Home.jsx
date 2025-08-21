import { Hero, HowItWork, ReadyGuild, WhyJoin } from "../components";

import { useEffect, useState } from "react";
// import { contractABI, contractAddress } from "../components/contractConfig";
// import { createPublicClient, http } from "viem";
// import { sepolia } from "viem/chains";
// import { useState, useEffect } from "react";
import { useWallets } from "@privy-io/react-auth";
import { useDispatch, useSelector } from "react-redux";
// import { publicClient } from "../utils/viemClient";
// import { publicClient } from "./../utils/viemClient";
import {
  fetchGuildData,
  fetchGuildIds,
} from "./../Features/Contract/contractSlice";

// const publicClient = createPublicClient({
//   chain: sepolia,
//   transport: http(),
// });

const Home = () => {
  // const [guildIds, setGuildIds] = useState([]);
  // const [GuildsArray, setGuilds] = useState([]);
  // const [accounts, setAccounts] = useState();

  // const { ready: ReadyWallet, wallets: ConnectedWallets } = useWallets();

  // useEffect(() => {
  //   if (ReadyWallet) {
  //     console.log("These are the wallets", ConnectedWallets);

  //     setAccounts(ConnectedWallets[0]);

  //     console.log("This is the account connected", accounts);
  //   }
  // }, [ReadyWallet]);

  // useEffect(() => {
  //   const guildIIDFunction = async () => {
  //     const Guild_IDS = await publicClient.readContract({
  //       address: contractAddress,
  //       abi: contractABI,
  //       functionName: "GuildIds",
  //     });

  //     setGuildIds(Guild_IDS);
  //   };

  //   guildIIDFunction();
  //   console.log("The Ids (State)", guildIds);
  // }, []);

  // useEffect(() => {
  //   const GuildsInfo = async () => {
  //     let Guilds_Created = [];

  //     for (let i = 0; i < guildIds.length; i++) {
  //       const Guild = await publicClient.readContract({
  //         address: contractAddress,
  //         abi: contractABI,
  //         functionName: "GuildData",
  //         args: [guildIds[i]],
  //       });

  //       Guilds_Created.push(Guild);

  //       console.log("The Guild", Guild, "\n Pushed:", Guilds_Created);
  //     }

  //     setGuilds(() => Guilds_Created);
  //   };

  //   GuildsInfo();

  //   console.log("The Guilds Array (State)", GuildsArray);
  // }, [guildIds]);

  const { authenticated, address } = useSelector((state) => state.auth);
  const { guildIds, guilds, status, error } = useSelector(
    (state) => state.contract
  );
  const { wallets } = useWallets();
  const dispatch = useDispatch();

  useEffect(() => {
    if (authenticated) {
      console.log("User authenticated, fetching guild IDs...");
      dispatch(fetchGuildIds());
    } else {
      console.log("User not authenticated, skipping fetch");
    }
  }, [authenticated, dispatch]);

  useEffect(() => {
    if (authenticated && guildIds.length > 0) {
      console.log("Guild IDs available, fetching guild data:", guildIds);
      dispatch(fetchGuildData(guildIds));
    } else if (guildIds.length === 0) {
      console.log("No guild IDs to fetch data for");
    }
  }, [authenticated, guildIds, dispatch]);
  console.log("Guild Data:", guilds);

  return (
    <>
      <Hero />
      <HowItWork />
      <WhyJoin />
      <ReadyGuild />
    </>
  );
};

export default Home;
