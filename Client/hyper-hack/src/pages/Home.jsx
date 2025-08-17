import { Hero, HowItWork, ReadyGuild, WhyJoin } from "../components";
import { contractABI,contractAddress } from "../components/contractConfig";
import {createPublicClient, http} from 'viem'
import {sepolia} from 'viem/chains'
import {useState, useEffect} from 'react'

const publicClient = createPublicClient({
  chain:sepolia,
  transport: http()
})

const Home = () => {

  const [guildIds, setGuildIds] =  useState([])
  const [GuildsArray, setGuilds] = useState()

    useEffect(()=>{

        const guildIIDFuction = async () => {

            const Guild_IDS = await publicClient.readContract({
              address:contractAddress,
              abi:contractABI,
              functionName:"GuildIds"

            })

            setGuildIds(Guild_IDS)

            console.log("The Ids",Guild_IDS," The State" ,guildIds)
            
        }

        guildIIDFuction()

    },[])

    useEffect(()=>{

        const Guilds = async () => {

            let Guilds_Created = [];

            for(let i = 0; i < guildIds.length; i++ ){
            
            const Guild = await publicClient.readContract({
              address:contractAddress,
              abi:contractABI,
              functionName:"GuildData",
              args:[guildIds[i]]
            })

            Guilds_Created.push(Guild)

            console.log("The Guild",Guild)
          }

          setGuilds(Guilds_Created)
          console.log("The Guilds",GuildsArray)
          
        }

        Guilds()

    },[guildIds])



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
