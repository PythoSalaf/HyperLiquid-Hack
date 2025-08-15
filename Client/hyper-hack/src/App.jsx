import { Routes, Route } from "react-router-dom";
import { LandingLayout } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingLayout />} />
      </Routes>
    </>
  );
}

export default App;
