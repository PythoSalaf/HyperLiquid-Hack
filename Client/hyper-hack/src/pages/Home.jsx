import { Hero, HowItWork, ReadyGuild, WhyJoin } from "../components";
import { contractABI, contractAddress } from "../components/contractConfig";
import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";
import { useState, useEffect } from "react";
import { useWallets } from "@privy-io/react-auth";

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
});

const Home = () => {
  const [guildIds, setGuildIds] = useState([]);
  const [GuildsArray, setGuilds] = useState([]);
  const [accounts, setAccounts] = useState();

  const { ready: ReadyWallet, wallets: ConnectedWallets } = useWallets();

  useEffect(() => {
    if (ReadyWallet) {
      console.log("These are the wallets", ConnectedWallets);

      setAccounts(ConnectedWallets[0]);

      console.log("This is the account connected", accounts);
    }
  }, [ReadyWallet]);

  useEffect(() => {
    const guildIIDFunction = async () => {
      const Guild_IDS = await publicClient.readContract({
        address: contractAddress,
        abi: contractABI,
        functionName: "GuildIds",
      });

      setGuildIds(Guild_IDS);
    };

    guildIIDFunction();
    console.log("The Ids (State)", guildIds);
  }, []);

  useEffect(() => {
    const GuildsInfo = async () => {
      let Guilds_Created = [];

      for (let i = 0; i < guildIds.length; i++) {
        const Guild = await publicClient.readContract({
          address: contractAddress,
          abi: contractABI,
          functionName: "GuildData",
          args: [guildIds[i]],
        });

        Guilds_Created.push(Guild);

        console.log("The Guild", Guild, "\n Pushed:", Guilds_Created);
      }

      setGuilds(() => Guilds_Created);
    };

    GuildsInfo();

    console.log("The Guilds Array (State)", GuildsArray);
  }, [guildIds]);

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
