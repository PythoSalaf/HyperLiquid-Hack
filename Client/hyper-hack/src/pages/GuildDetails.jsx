import { Chat } from "../components";
import { leaderDummy } from "../components/Dummy";

const GuildDetails = () => {
  return (
    <div className="w-full py-3">
      <div className="flex items-center mb-2 justify-between">
        <h2 className="font-semibold text-lg md:text-xl mb-4">Guild Details</h2>
        <button className="bg-[#1e2a46] text-sm font-semibold md:text-base rounded-lg py-0.5 md:py-1.5 px-6">
          Join Guild
        </button>
      </div>
      <div className="flex items-center gap-6 justify-between flex-col md:flex-row w-full">
        <div className="flex items-center justify-between py-2 rounded-lg border border-[#1e2a46] w-full">
          <div className="w-[92%] mx-auto">
            <div className="flex items-center justify-between gap-x-2">
              <h4 className="text-sm">Guild Name:</h4>
              <h2 className="font-semibold text-lg md:text-xl">
                Quant Collective
              </h2>
            </div>
            <div className="flex items-center justify-between py-3">
              <h4 className="text-sm">Creator:</h4>
              <h2 className="font-semibold text-lg md:text-xl">Quant</h2>
            </div>
            <div className="flex items-center justify-between py-3">
              <h4 className="text-sm">Address:</h4>
              <div className="bg-[#1e2a46] rounded-lg py-1 px-4 text-sm md:text-base font-semibold">
                0x832jd......udid
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between my-2 py-3 rounded-lg border border-[#1e2a46] w-full">
          <div className="w-[92%] mx-auto ">
            <h4 className="mb-4 text-base md:text-lg font-semibold">
              Guild Decription
            </h4>
            <p className="text-sm font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate vel veritatis minima explicabo eligendi tempore
              molestiae quaerat velit necessitatibus, vero quas quo a
              dignissimos, impedit aperiam repudiandae doloribus soluta quia!
            </p>
          </div>
        </div>
      </div>
      <div className="my-5 py-2 rounded-lg border border-[#1e2a46] w-full">
        <div className="w-[96%] mx-auto">
          <h2 className="font-semibold text-lg md:text-xl">All Members</h2>
          <div className="w-full my-4 border border-[#1e2a46] rounded-lg py-2 overflow-x-auto ">
            <table className="min-w-full o ">
              <thead className="border-b border-b-[#1e2a46] ">
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
              <tbody className="w-full text-center ">
                {leaderDummy.map((data) => (
                  <tr
                    key={data.id}
                    className="w-full border-b  border-b-[#1e2a46]"
                  >
                    <td className=" py-2 text-sm md:text-base ">{data.id}</td>
                    <td className=" py-2 text-sm md:text-base ">{data.name}</td>
                    <td className="py-2 text-sm md:text-base  ">
                      <div className={`text-green-800 py-1 `}>{data.pl}</div>
                    </td>
                    <td className=" py-2 text-sm md:text-base">
                      {data.members}
                    </td>
                    <td className={`py-2 text-sm md:text-base `}>
                      {data.volume}
                    </td>
                    <td className="py-2 text-sm md:text-base px-3 font-semibold ">
                      $40
                    </td>
                  </tr>
                ))}
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
              <h3 className="">Member Online:</h3>
              <h3 className="">12</h3>
            </div>
          </div>
          <div className="my-4 w-full py-2 rounded-lg border border-[#1e2a46]">
            <div className="mx-auto w-[96%]">
              <h2 className="mb-4">Quant Collective</h2>
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuildDetails;
