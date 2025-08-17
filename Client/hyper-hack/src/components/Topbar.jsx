const Topbar = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="">
        <input
          type="search"
          placeholder="search guilds, traders, strategies"
          className="border border-[#dadada] rounded-lg px-3 h-8 outline-0 w-48 md:w-52 lg:w-80"
        />
      </div>
      <div className="hidden md:block">
        <button className="bg-[#202b46] px-6 rounded-lg py-1.5 cursor-pointer">
          Create Guild
        </button>
      </div>
    </div>
  );
};

export default Topbar;
