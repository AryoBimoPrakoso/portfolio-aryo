import "./App.css";
import Skills from "./components/Skills";
import Homepage from "./components/Homepage";
import Project from "./components/Project";
import Ewallet from "./project/eWallet";
import RunTracker from "./project/runTracker";
import Kopi from "./project/Kopi";
import MyAgro from "./project/MyAgro";
import About from "./components/About";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { CursorProvider } from "./CustomCursor";
import Contact from "./components/Contact";
import Notfound from "./components/NotFound";
import ProjectFE from "./components/ProjectFE";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import MyProjectFe from "./pages/MyProjectFe";

function App() {
  return (
    <>
      <CursorProvider>
        <div className="overflow-x-hidden">
          <Routes>
            {/* Route untuk halaman utama */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/my-project" element={<MyProjectFe />} />
              <Route path="/my-project/web-music-player" element={<ProjectFE/>}/>
              {/* Routes untuk detail project */}
              <Route path="/eWallet" element={<Ewallet />} />
              <Route path="/runTracker" element={<RunTracker />} />
              <Route path="/siKopi" element={<Kopi />} />
              <Route path="/myAgro" element={<MyAgro />} />
              <Route path="*" element={<Notfound />} />
            </Route>
          </Routes>
        </div>
      </CursorProvider>
    </>
  );
}

export default App;
