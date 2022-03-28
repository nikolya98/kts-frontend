import React from "react";

import AccountPage from "@pages/AccountPage";
import SearchPage from "@pages/SearchPage";
import { Routes, Route, Navigate } from "react-router-dom";

const App: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/search" element={<SearchPage />} />
      <Route path="/search/:name" element={<AccountPage />} />
      <Route path="*" element={<Navigate to="/search" />} />
    </Routes>
  );
};

export default App;
