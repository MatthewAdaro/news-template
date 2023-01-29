import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Business from "./components/Business";
import Lifestyle from "./components/Lifestyle";
import Technology from "./components/Technology";
import HealthAndWellness from "./components/HealthAndWellness";
import Events from "./components/Events";
import Travel from "./components/Travel";

import DataCard from "./components/DataCard";

function App() {
  const dataVal = [
    {
      name: "Shotgun Wedding",
      category: "sdfasdf",
    },

    "Teen Wolf",
    "You People",
    "Avatar: The Way of Water",
    "Narvik",
    "Night Train",
    "Puss in Boots: The Last Wish",
    "Transfusion",
    "Darby and the Dead",
    "Shotgun Guy",
    "Teen Men",
    "These People",
    "Avatar: The Last Air Bender",
    "Narvik",
    "Night Bus",
    "Puss in Boots: The Last Cat",
    "Transformer",
    "Dawn and the Dead",
  ];

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/business" element={<Business />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/healthandwellness" element={<HealthAndWellness />} />
        <Route path="/events" element={<Events />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
      <DataCard />
    </div>
  );
}

export default App;
