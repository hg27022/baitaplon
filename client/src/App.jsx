import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import NoPage from "./pages/nopage/NoPage";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/user/Login";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const [token, setToken] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={"/"} element={<Navigate to={"/user"} replace />} /> */}
        <Route path={"/login"} element={<Login/>} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"*"} element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
