import { Routes, Route } from "react-router-dom";
import {
  DashboardLayout,
  LandingLayout,
  Dashboard,
  Guild,
  Leaderboards,
  GuildDetails,
} from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingLayout />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/guilds" element={<Guild />} />
          <Route path="/dashboard/guilds/:id" element={<GuildDetails />} />
          <Route path="/dashboard/leaderboards" element={<Leaderboards />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
