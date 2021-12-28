import "./App.css";
import Header from "./components/header";
import SwipeButtons from "./components/SwipeButtons";
import TinderrCard from "./components/tindercard";
function App() {
  return (
    <div className="app">
      <Header />
      <TinderrCard />
      <SwipeButtons />
      {/* swipe button */}
    </div>
  );
}

export default App;
