import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Missions from "./pages/Missions";
import Home from "./pages/Home";
import Mission from "./pages/Mission";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <link
        href="https://api.fontshare.com/v2/css?f[]=khand@400&f[]=array@400&display=swap"
        rel="stylesheet"
      ></link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="missions/:category/:id" element={<Mission />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
