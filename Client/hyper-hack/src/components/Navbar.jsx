import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useWallets, usePrivy } from "@privy-io/react-auth";

const Navbar = () => {
  // This is the state variable for the connected address.
  const [Accounts, setAccounts] = useState();

  // const count = 0;

  //wallets is an array of objects that defines all the connected accounts to the site. [After I connect my wallet, I request for the
  // array to get me the address I just connected]
  const { ready: walletsRead, wallets: readyWallets } = useWallets();
  const { login, logout, ready, authenticated } = usePrivy();

  useEffect(() => {
    // ready - is a Privy defined bool that returns true when the SDK has loaded successfully, and checked connected accounts to the site
    // authenticated - also is a boolean that returns true when a wallet or email or any other thing is connected to the site
    if (ready && authenticated) {
      console.log("Fully Loaded");
      // Here Im setting that address to a state variable. You can pick it from here and put it in your contextAPI
      if (walletsRead && readyWallets.length > 0) {
        setAccounts(readyWallets[0].address);
      }
    }

    console.log("We are Loaded");
  }, [ready, authenticated]);

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
          <button
            style={{ display: authenticated ? "none" : "flex" }}
            onClick={login}
            className="hidden active:bg-blue-800 active:scale-95 transition-transform duration-300 ease-in-out 
          md:block bg-[#5b8eff] text-white px-3 ml-4 py-1.5 rounded-lg"
          >
            Login / Sign Up
          </button>
          <button
            style={{ display: authenticated ? "flex" : "none" }}
            onClick={logout}
            className="hidden active:bg-blue-800 active:scale-95 transition-transform duration-300 ease-in-out 
          md:block bg-[#5b8eff] text-white px-3 ml-4 py-1.5 rounded-lg"
          >
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
