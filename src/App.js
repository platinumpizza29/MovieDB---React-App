import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieBox from "./pages/MovieBox";

function App() {
  return (
    // <div className="App">
    //   <HomePage />
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/moviebox/:id" element={<MovieBox />} />
      </Routes>
    </Router>
  );
}

export default App;
