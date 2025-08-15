import { Routes, Route } from "react-router-dom";
import { DashboardLayout, LandingLayout, Dashboard } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingLayout />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
