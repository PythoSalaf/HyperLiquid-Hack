import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
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
        <div className="">
          <button className="hidden md:block bg-[#5b8eff] text-white px-3 py-1.5 rounded-lg">
            Login/Signin
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
