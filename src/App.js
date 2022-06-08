import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Home from "./modules/Home";
import PrivacyPolicy from "./shared/components/StaticComponent/PrivacyPolicy";
import TermsOfUse from "./shared/components/StaticComponent/TermsOfUse";
import Settings from "./modules/Account/Settings";
import ContactSupport from "./modules/ContactUs/ContactSupport";
import "bootstrap/dist/css/bootstrap.css";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfUse />} />
          <Route path="/contact-support" element={<ContactSupport />} />
          <Route path="/account" element={<Settings />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
