import { useState } from "react";
import "./App.css";
import FeaturedStories from "./Components/FeaturedStories";
import MiniNavbar from "./Components/MiniNavbar";
import MovingStories from "./Components/MovingStories";
import Navbar from "./Components/Navbar";
import Story from "./Components/Story";
import Box from "@mui/material/Box";
import ExploreCaroussel from "./Components/ExploreCaroussel";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Box className="app">
      <Story />
      <MovingStories />
      <FeaturedStories />
      <Box className="second-screen">
        <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu} />
        <MiniNavbar openMenu={openMenu} />
        <ExploreCaroussel />
      </Box>
    </Box>
  );
}

export default App;
