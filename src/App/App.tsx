import RepoPage from "@pages/RepoPage";
import ReposSearchPage from "@pages/ReposSearchPage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/repos" />} />
      <Route path="/repos" element={<ReposSearchPage />} />
      <Route path="/repos/:repoId" element={<RepoPage />} />
      <Route path="*" element={<Navigate to="/repos" />} />
    </Routes>
  );
}

export default App;
