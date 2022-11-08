import "./App.css";
import FeaturedStories from "./Components/FeaturedStories";
import MovingStories from "./Components/MovingStories";
import Story from "./Components/Story";

function App() {
  return (
    <div className="app">
      <Story />
      <MovingStories />
      <FeaturedStories />
    </div>
  );
}

export default App;
