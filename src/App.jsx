import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NiyamTakerPage from "./pages/NiyamTakerPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="niyamtaker" element={<NiyamTakerPage />} />
      </Routes>
    </>
  );
}

export default App;
