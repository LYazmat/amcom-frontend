import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Sales from "./components/pages/Sales";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<Sales />} />

        {/*
        <Route path="/curso/apresentacao/:id" element={<CursoApresentacao />} />
        <Route path="/login" element={<Login />} />
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
