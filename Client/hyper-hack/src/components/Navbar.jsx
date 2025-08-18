import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useWallets, usePrivy } from "@privy-io/react-auth";

const Navbar = () => {

    const {ready: readyWallets} = useWallets();
    const {login, logout} = usePrivy();

  return (
    <div className="w-full fixed bg-[#0f1724] border-b  border-b-[#202a3a] flex items-center text-white py-3">
      <div className="w-[95%] mx-auto md:w-[92%] flex items-center justify-between">
        <Link to="/">HyperHaus</Link>
        <div className="hidden md:flex items-center gap-x-6">
          <Link>Home</Link>
          <Link>How it works</Link>
          <Link>Benefits</Link>
          <Link>Guilds</Link>
        </div>
        <div className="flex">
          <button onClick={login} className="hidden active:bg-blue-800 active:scale-95 transition-transform duration-300 ease-in-out 
          md:block bg-[#5b8eff] text-white px-3 ml-4 py-1.5 rounded-lg">
            Join Guild
          </button>
          <button onClick={logout} className="hidden active:bg-blue-800 active:scale-95 transition-transform duration-300 ease-in-out 
          md:block bg-[#5b8eff] text-white px-3 ml-4 py-1.5 rounded-lg">
            Logout
          </button>
          <div className="block md:hidden">
            <MdMenu className="size-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
