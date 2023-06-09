import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Navbar } from "./components/navbar";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={"a"} />
        <Route path="/cart" element={"a"} />
      </Routes>
    </Router>
  );
};

App;
