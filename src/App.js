import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Home from "./modules/Home";
import PrivacyPolicy from "./shared/components/StaticComponent/PrivacyPolicy";
import TermsOfUse from "./shared/components/StaticComponent/TermsOfUse";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfUse />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
