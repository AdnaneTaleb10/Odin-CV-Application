import "./App.css";
import Hero from "./components/Hero/Hero";
import CVBuilder from "./components/CVBuilder/CVBuilder";
import { useState } from "react";

function App() {
  const [showHero , setShowHero] = useState(true)

  return (
    <>
      {showHero ? (
        <Hero onStart={() => setShowHero(false)} />
      ) : (
        <CVBuilder />
      )}
    </>
  );
}

export default App;
