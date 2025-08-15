const Hero = () => {
  return (
    <div className="w-full h-screen text-white bg-[#0f1724]">
      <div className="w-[95%] mx-auto md:w-[92%] pt-14 md:pt-20 flex flex-col md:flex-row items-center justify-between">
        <div className="">
          <h2 className="text-2xl md:text-3xl lg:text-5xl leading-12 lg:leading-20">
            HyperHaus <br /> HyperSocial Trading Guilds
          </h2>
          <p className="py-6 text-lg">
            Team up, trade smarter, and earn together on Hyperliquild. <br />{" "}
            Form a guild, coordinate strategies, and share long-term rewards
          </p>
          <div className="flex items-center gap-9 mt-11">
            <button className="bg-[#5b8eff] text-white rounded-lg py-1.5 px-4">
              Join a guild
            </button>
            <button className="border border-[#0e1a2a] text-white rounded-lg py-1.5 px-4 shadow">
              Get started
            </button>
          </div>
        </div>
        <div className="">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
