import Home from "./pages/Home";
import FlightsHomePage from "./pages/FlightsHomePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/FlightsHomePage" element={<FlightsHomePage/>} />
        <Route  path="/" element={<Home/>} />
      </Routes>
  </Router>
  );
}

export default App;
