import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Sale from "./components/pages/Sale";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<Sale />} />

        {/*
        <Route path="/curso/apresentacao/:id" element={<CursoApresentacao />} />
        <Route path="/login" element={<Login />} />
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
