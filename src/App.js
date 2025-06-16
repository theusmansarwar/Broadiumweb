import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/FooterSection/Footer";
import Index from "./Pages/Index";
import "./App.css";
import NotFound from "./Pages/NotFound/NotFound";
import Contact from "./Pages/Contact/Contact";
import Tv from "./Pages/Tv/Tv";

function App() {

  return (
    <Router>
      <Header />

      <div className="main-content">
        <div className="call-now-btn">Call Now +1 800 372 7981</div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tv" element={<Tv />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
