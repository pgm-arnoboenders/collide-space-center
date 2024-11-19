import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Missions from "./pages/Missions";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import DECODE from "./pages/DECODE";

import "./App.css";
import CONVERT_TO_HEX from "./pages/CONVERT_TO_HEX";
import DISARIUM_NUMBER from "./pages/DISARIUM_NUMBER";
import HASH_MAP_VALUE from "./pages/HASH_MAP_VALUE";
import MISSING_NUMBERS from "./pages/MISSING_NUMBERS";
import PERFECT_NUMBER from "./pages/PERFECT_NUMBER";
import PRIMES from "./pages/PRIMES";
import REPLACE_STRING from "./pages/REPLACE_STRING";
import REVERSE_STRING from "./pages/REVERSE_STRING";


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
        <Route path="/DECODE" element={<DECODE />} />
        <Route path="CONVERT_TO_HEX" element={<CONVERT_TO_HEX />} />
        <Route path="DISARIUM_NUMBER" element={<DISARIUM_NUMBER />} />
        <Route path="HASH_MAP_VALUE" element={<HASH_MAP_VALUE />} />
        <Route path="MISSING_NUMBERS" element={<MISSING_NUMBERS />} />
        <Route path="PERFECT_NUMBER" element={<PERFECT_NUMBER />} />
        <Route path="PRIMES" element={<PRIMES />} />
        <Route path="REVERSE_STRING" element={<REVERSE_STRING />} />
        <Route path="REPLACE_STRING" element={<REPLACE_STRING />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
