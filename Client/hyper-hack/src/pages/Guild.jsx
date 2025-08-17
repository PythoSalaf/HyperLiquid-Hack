import { GridCard } from "../components";
import { leaderDummy } from "../components/Dummy";

const Guild = () => {
  return (
    <div className="w-full py-2">
      <div className="w-full hidden md:flex items-center gap-20">
        <h2 className="font-semibold text-lg md:text-xl">Guilds</h2>
        <div className="flex items-center gap-14 ">
          <input
            type="text"
            placeholder="Category: All"
            className="border border-[#1e2a46] px-3 rounded-lg h-8 md:h-9"
          />
          <input
            type="text"
            placeholder="Sort: P&L"
            className="border border-[#1e2a46] px-3 rounded-lg h-8 md:h-9"
          />
          <input
            type="text"
            placeholder="Search guild names.........."
            className="border border-[#1e2a46] px-3 rounded-lg h-8 md:h-9"
          />
        </div>
        <div className="">
          <button className="bg-[#5b8eff] px-4 py-1.5 rounded-lg">
            Browse All
          </button>
        </div>
      </div>
      <div className="w-full my-7 border border-[#1e2a46] py-3 rounded-lg">
        <div className="w-[96%] mx-auto">
          <div className="border border-dashed w-full px-4 flex rounded-lg items-center justify-between border-[#1e2a46] py-2">
            <div className="">
              <h2 className="font-semibold text-sm md:text-lg lg:text-xl">
                Find your trading squad
              </h2>
              <p className="pt-1.5 text-xs md:text-sm lg:text-base ">
                Join top-performing guilds or create your own and earn HYPE
                together
              </p>
            </div>
            <div className="">
              <button className="px-4  font-semibold text-sm md:text-base py-1.5 md:py-2 rounded-lg bg-[#212d47]">
                Create Guild
              </button>
            </div>
          </div>
          <div className="py-5">
            <div className="flex items-center justify-between flex-col md:flex-row ">
              <h2 className="flex items-center gap-3">
                <span className="bg-[#1e2a46] rounded-2xl px-3 py-0.5 md:py-1.5">
                  Trading
                </span>{" "}
                Based on 7d P&L and join rate
              </h2>
              <div className="flex items-center mt-4 mb-1.5 md:mb-0 md:mt-0 gap-x-4">
                <h3 className="border border-[#1e2a46] rounded-lg px-4 py-1">
                  Show: Public
                </h3>
                <h3 className="border border-[#1e2a46] rounded-lg px-4 py-1">
                  Strategy: Any
                </h3>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <GridCard />
              <GridCard />
              <GridCard />
            </div>
          </div>

          <div className="w-full  mb-5 border border-[#1e2a46] py-1.5 rounded-lg">
            <div className="w-[96%] mx-auto">
              <h2 className="font-semibold text-lg md:text-xl">All Guilds</h2>
              <div className="w-full my-4 border border-[#1e2a46] rounded-lg py-2 overflow-x-auto ">
                <table className="min-w-full o ">
                  <thead className="border-b border-b-[#1e2a46] ">
                    <tr>
                      <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                        #
                      </th>
                      <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                        Guild
                      </th>
                      <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                        7d P&L
                      </th>
                      <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                        Members
                      </th>
                      <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                        Volume
                      </th>
                      <th className="pb-2 text-sm md:text-base lg:text-lg font-semibold">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="w-full text-center ">
                    {leaderDummy.map((data) => (
                      <tr
                        key={data.id}
                        className="w-full border-b  border-b-[#1e2a46]"
                      >
                        <td className=" py-2 text-sm md:text-base ">
                          {data.id}
                        </td>
                        <td className=" py-2 text-sm md:text-base ">
                          {data.name}
                        </td>
                        <td className="py-2 text-sm md:text-base  ">
                          <div className={`text-green-800 py-1 `}>
                            {data.pl}
                          </div>
                        </td>
                        <td className=" py-2 text-sm md:text-base">
                          {data.members}
                        </td>
                        <td className={`py-2 text-sm md:text-base `}>
                          {data.volume}
                        </td>
                        <td className="py-2 text-sm md:text-base px-3 font-semibold ">
                          <div
                            className={`rounded-3xl py-1 bg-[#6d8cff] text-[#081423]`}
                          >
                            view
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="w-full  mb-5 border border-[#1e2a46] py-1.5 rounded-lg">
            <div className="w-[96%] mx-auto">
              <h2 className="font-semibold text-lg md:text-xl">
                Create a Guilds
              </h2>
              <div className="my-4 flex items-start flex-col md:flex-row gap-3">
                <div className="border border-[#1e2a46] py-2 rounded-lg w-full">
                  <div className="w-[95%] mx-auto">
                    <div className="w-full">
                      <input
                        type="text"
                        placeholder="Guild Name"
                        className="w-full border border-[#1e2a46] rounded-lg outline-none px-3 h-8 md:h-9"
                      />
                    </div>
                    <div className="w-full my-3">
                      <textarea
                        type="text"
                        placeholder="Guild Description"
                        className="w-full border border-[#1e2a46] rounded-lg outline-none px-3 h-16 md:h-20 pt-2 resize-none"
                      />
                    </div>
                    <div className="w-full">
                      <textarea
                        type="text"
                        placeholder="Guild Rule Optional"
                        className="w-full border border-[#1e2a46] rounded-lg outline-none px-3 h-16 md:h-20 pt-2 resize-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="border border-[#1e2a46] py-2 rounded-lg outline-none w-full">
                  <div className="w-[95%] mx-auto ">
                    <div className="w-full">
                      <select className="w-full border border-[#1e2a46] text-white bg-[#0b1320]  px-3 py-2 rounded-lg">
                        <option value="">Initial Tressury allocation</option>
                        <option value="">HYPE</option>
                        <option value="">USDC</option>
                        <option value="">USDT</option>
                        <option value="">BTC</option>
                        <option value="">SOL</option>
                        <option value="">ETH</option>
                      </select>
                    </div>
                    <div className="w-full py-5">
                      <select className="w-full border border-[#1e2a46] text-white bg-[#0b1320]  px-3 py-2 rounded-lg">
                        <option value="">Tressury Vesting</option>
                        <option value="">3 months</option>
                        <option value="">6 months</option>
                        <option value="">9 months</option>
                        <option value="">12 months</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <select className="w-full border border-[#1e2a46] text-white bg-[#0b1320]  px-3 py-2 rounded-lg">
                        <option value="">Visibility</option>
                        <option value="">Public</option>
                        <option value="">Private</option>
                      </select>
                    </div>
                    <div className="mt-4 mb-2 w-full">
                      <button className="w-full rounded-xl py-2 bg-[#5b8eff] cursor-pointer">
                        Create Guild
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guild;
