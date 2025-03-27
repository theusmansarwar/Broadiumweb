import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/FooterSection/Footer";
import Index from "./Pages/Index";
import "./App.css";
import NotFound from "./Pages/NotFound/NotFound";

function App() {

  return (
    <Router>
      <Header />
      <div className="main-content">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
