import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useWallets } from "@privy-io/react-auth";
import { joinGuild } from "../Features/Contract/contractSlice";
import { Chat, JoinGuildModal } from "../components";
import { entryThresholdeth } from "../utils/formatters";
import { useEffect, useState } from "react";

const GuildDetails = () => {
  const { guildId } = useParams(); // Get guildId from URL
  const { authenticated, address } = useSelector((state) => state.auth);
  const { guilds, status, error } = useSelector((state) => state.contract);
  const { wallets } = useWallets();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Find the guild by guildId
  const guildData = guilds.find((g) => g.guildId === guildId);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (!guildData) {
      console.warn("Guild not found for ID:", guildId);
    } else {
      console.log("Guild data:", guildData);
    }
  }, [guildData, guildId]);

  const handleJoinGuild = async (guildId, memberName, entryThreshold) => {
    if (!authenticated || !address || !wallets[0]) {
      setFormError("Please connect your wallet to join a guild");
      console.error("User not authenticated or wallet not connected");
      return;
    }

    if (!guildData) {
      setFormError("No guild data available to join");
      console.error("No guild data available to join");
      return;
    }

    try {
      console.log("Joining guild with data:", {
        guildId,
        memberName,
        entryThreshold,
      });
      await dispatch(
        joinGuild({
          guildId,
          memberName,
          entryThreshold: entryThreshold || BigInt(0),
          wallet: wallets[0],
        })
      ).unwrap();
      console.log("Joined guild successfully");
      setFormError("");
      navigate("/guilds"); // Redirect to guilds page after joining
    } catch (error) {
      console.error("Failed to join guild:", error);
      setFormError(error.message || "Failed to join guild");
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormError("");
  };

  if (!authenticated) {
    return <div className="p-4">Please log in to view guild details.</div>;
  }

  if (status === "loading") {
    return <div className="p-4">Loading...</div>;
  }

  if (status === "failed") {
    return (
      <div className="p-4">Error: {error || "Failed to load guild data"}</div>
    );
  }

  if (!guildData) {
    return <div className="p-4">Guild not found for ID: {guildId}</div>;
  }

  const { guild } = guildData;

  return (
    <div className="w-full py-3">
      <JoinGuildModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onJoin={handleJoinGuild}
        guildId={guildId}
        entryThreshold={guild.entryThreshold || BigInt(0)}
        guildName={guild.guildName || "Unknown Guild"}
        wallet={wallets[0]}
      />
      <div className="flex items-center mb-2 justify-between">
        <h2 className="font-semibold text-lg md:text-xl mb-4">Guild Details</h2>
        <button
          className="bg-[#1e2a46] cursor-pointer text-sm font-semibold md:text-base rounded-lg py-0.5 md:py-1.5 px-6"
          onClick={openModal}
          disabled={!authenticated || !wallets[0]}
        >
          Join Guild
        </button>
      </div>
      {formError && (
        <div className="text-red-500 text-sm mb-4">{formError}</div>
      )}
      <div className="flex items-center gap-6 justify-between flex-col md:flex-row w-full">
        <div className="flex items-center justify-between py-2 rounded-lg border border-[#1e2a46] w-full">
          <div className="w-[92%] mx-auto">
            <div className="flex items-center justify-between gap-x-2">
              <h4 className="text-sm">Guild Name:</h4>
              <h2 className="font-semibold text-lg md:text-xl">
                {guild.guildName || "Unknown Guild"}
              </h2>
            </div>
            <div className="flex items-center justify-between py-3">
              <h4 className="text-sm">Creator:</h4>
              <h2 className="font-semibold text-lg md:text-xl">
                {guild.ownerName || "Unknown"}
              </h2>
            </div>
            <div className="flex items-center justify-between py-3">
              <h4 className="text-sm">Address:</h4>
              <div className="bg-[#1e2a46] rounded-lg py-1 px-4 text-sm md:text-base font-semibold">
                {guild.ownerAddress
                  ? `${guild.ownerAddress.slice(
                      0,
                      6
                    )}...${guild.ownerAddress.slice(-4)}`
                  : "N/A"}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between my-2 py-3 rounded-lg border border-[#1e2a46] w-full">
          <div className="w-[92%] mx-auto">
            <h4 className="mb-4 text-base md:text-lg font-semibold">
              Guild Description
            </h4>
            <p className="text-sm font-semibold">
              {guild.descript || "No description available"}
            </p>
          </div>
        </div>
      </div>
      <div className="my-5 py-2 rounded-lg border border-[#1e2a46] w-full">
        <div className="w-[96%] mx-auto">
          <h2 className="font-semibold text-lg md:text-xl">All Members</h2>
          <div className="w-full my-4 border border-[#1e2a46] rounded-lg py-2 overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b border-b-[#1e2a46]">
                <tr>
                  <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                    #
                  </th>
                  <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                    Name
                  </th>
                  <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                    Address
                  </th>
                  <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                    Members
                  </th>
                  <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                    Stake
                  </th>
                  <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                    Caps
                  </th>
                </tr>
              </thead>
              <tbody className="w-full text-center">
                {guild.memberNames?.map((name, index) => (
                  <tr
                    key={index}
                    className="w-full border-b border-b-[#1e2a46]"
                  >
                    <td className="py-2 text-sm md:text-base">{index + 1}</td>
                    <td className="py-2 text-sm md:text-base">
                      {name || "Unknown"}
                    </td>
                    <td className="py-2 text-sm md:text-base">
                      {guild.memberAddresses[index]
                        ? `${guild.memberAddresses[index].slice(
                            0,
                            6
                          )}...${guild.memberAddresses[index].slice(-4)}`
                        : "N/A"}
                    </td>
                    <td className="py-2 text-sm md:text-base">
                      {guild.memberNames.length}
                    </td>
                    <td className="py-2 text-sm md:text-base">
                      {guild.memberStakes[index]
                        ? entryThresholdeth(guild.memberStakes[index])
                        : "0"}{" "}
                      ETH
                    </td>
                    <td className="py-2 text-sm md:text-base">
                      {guild.memberCap ? guild.memberCap.toString() : "0"}
                    </td>
                  </tr>
                )) || (
                  <tr>
                    <td colSpan="6" className="py-2 text-sm md:text-base">
                      No members found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="py-2 rounded-lg border my-2 border-[#1e2a46] w-full">
        <div className="w-[96%] mx-auto">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-base md:text-lg">
              Guild Chat Room
            </h3>
            <div className="flex items-center gap-x-2">
              <h3 className="">Members Online:</h3>
              <h3 className="">{guild.memberNames?.length || 0}</h3>
            </div>
          </div>
          <div className="my-4 w-full py-2 rounded-lg border border-[#1e2a46]">
            <div className="mx-auto w-[96%]">
              <h2 className="mb-4">{guild.guildName || "Unknown Guild"}</h2>
              <Chat guildId={guildId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuildDetails;
