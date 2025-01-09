import React, { useRef } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Mission from "./Components/Mission/Mission";

function App() {
  const missionRef = useRef(null); // Ref for Mission component

  // Scroll to Mission component
  const scrollToMission = () => {
    missionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Navbar />
      <Hero scrollToMission={scrollToMission} /> {/* Pass scroll handler */}
      <Mission ref={missionRef} /> {/* Attach ref to Mission */}
      <Footer />
    </div>
  );
}

export default App;
