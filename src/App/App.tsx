import ReposSearchPage from "@pages/ReposSearchPage";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/repos" />} />
      <Route path="/repos" element={<ReposSearchPage />} />
    </Routes>
  );
}

export default App;
