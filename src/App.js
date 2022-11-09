import { useState } from "react";
import "./App.css";
import FeaturedStories from "./Components/FeaturedStories";
import MiniNavbar from "./Components/MiniNavbar";
import MovingStories from "./Components/MovingStories";
import Navbar from "./Components/Navbar";
import Story from "./Components/Story";
import Box from "@mui/material/Box";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="app">
      <Story />
      <MovingStories />
      <FeaturedStories />
      <Box className="second-screen">
        <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu} />
        <MiniNavbar openMenu={openMenu} />
      </Box>
    </div>
  );
}

export default App;
