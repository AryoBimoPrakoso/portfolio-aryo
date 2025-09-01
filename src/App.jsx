import "./App.css";
// import Skills from "./components/Skills";
// import Homepage from "./components/Homepage";
// import Project from "./components/Design";
// import Ewallet from "./project/eWallet";
// import RunTracker from "./project/runTracker";
// import Kopi from "./project/Kopi";
// import MyAgro from "./project/MyAgro";
// import About from "./components/About";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { CursorProvider } from "./CustomCursor";
import Contact from "./components/Contact";
import Notfound from "./components/NotFound";
import ProjectDetail from "./pages/ProjectDetail";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import DesignDetail from "./pages/DesignDetail";

function App() {


  return (  
    <>
      <CursorProvider>
        <div className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/my-project" element={<Project />} />
              <Route path="/my-project/:id/:titleSlug" element={<ProjectDetail />} />
              <Route path="/design/:id/:titleSlug" element={<DesignDetail />} />
              <Route path="*" element={<Notfound />} />
            </Route>
          </Routes>
        </div>
      </CursorProvider>
    </>
  );
}

export default App;
