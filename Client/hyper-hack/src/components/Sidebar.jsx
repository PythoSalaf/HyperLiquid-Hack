import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="text-white relative">
      <Link to="/" className="font-semibold text-2xl">
        HyperHaus
      </Link>
      <div className="mt-10 flex items-start gap-y-4 flex-col">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/dashboard/guilds">Guilds</NavLink>
        <NavLink to="/dashboard/leaderboards">Leaderboards</NavLink>
        <NavLink>My Guild</NavLink>
        <NavLink>Rewards</NavLink>
        <NavLink>Treasury</NavLink>
        <NavLink>Settings</NavLink>
      </div>
      <div className="absolute -bottom-60">
        <h2>Hello</h2>
      </div>
    </div>
  );
};

export default Sidebar;
