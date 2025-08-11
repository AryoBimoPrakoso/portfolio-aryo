import "./App.css";
import Skills from "./components/Skills";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Ewallet from "./project/eWallet";
import RunTracker from "./project/runTracker";
import Kopi from "./project/Kopi";
import MyAgro from "./project/MyAgro";
import About from "./components/About";
import React from "react";
import { Routes, Route } from "react-router-dom";
// import { CursorProvider } from "./CustomCursor";

function App() {
  return (
    <>
      {/* <CursorProvider> */}
        <div className="overflow-x-hidden">
          <Navbar />

          <Routes>
            {/* Route untuk halaman utama */}
            <Route
              path="/"
              element={
                <>
                  <Homepage />
                  <Skills />
                  <About />
                  <Project />
                </>
              }
            />

            {/* Routes untuk detail project */}
            <Route path="/eWallet" element={<Ewallet />} />
            <Route path="/runTracker" element={<RunTracker />} />
            <Route path="/siKopi" element={<Kopi />} />
            <Route path="/myAgro" element={<MyAgro />} />
          </Routes>
        </div>
      {/* </CursorProvider> */}
    </>
  );
}

export default App;
