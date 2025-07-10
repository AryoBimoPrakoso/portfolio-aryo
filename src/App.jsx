import "./App.css";
import Skills from "./components/Skills";
import Homepage from "./components/Homepage";
import Navbar from "./components/navbar";
import { useState } from "react";
import Project from "./components/Project";
import Ewallet from "./project/eWallet";
import RunTracker from "./project/runTracker";
import Kopi from "./project/Kopi";
import MyAgro from "./project/MyAgro";

function App() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Navbar setIndex={setIndex} />
      {index === 0 && (
        <div id="porto" className="w-full flex flex-col p-6">
          <Homepage />
          <hr className="my-6" />
          <Skills />
          <hr className="my-6" />
          <Project setIndex={setIndex} />
        </div>
      )}
      <div>{index === 1 && <Ewallet setIndex={setIndex} />}</div>
      <div>{index === 2 && <RunTracker setIndex={setIndex} />}</div>
      <div>{index === 3 && <Kopi setIndex={setIndex} />}</div>
      <div>{index === 4 && <MyAgro setIndex={setIndex} />}</div>
    </>
  );
}

export default App;
