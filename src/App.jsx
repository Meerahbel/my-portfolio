import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
