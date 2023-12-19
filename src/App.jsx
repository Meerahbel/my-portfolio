import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
