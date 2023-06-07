import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={"a"} />
        <Route path="/cart" element={"a"} />
      </Routes>
    </Router>
  );
};

export default App;
