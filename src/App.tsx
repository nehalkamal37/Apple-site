import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
//import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PrescriberPortalPage from './pages/PrescriberPortalPage';
import PatientResourcesPage from './pages/PatientResourcesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import BrochurePage from './pages/HomePage';
import EsBrochurePage from './pages/esHome';
// If BrochurePage is a different component, update the path accordingly, for example:
import TriFoldPage from './pages/TriFoldPage';
import BrochureInside from './pages/BrochureInside';
import PatientPostcardPage from './pages/PatientPostcardPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <Router>
      
      <ScrollToTop />

      <Layout>
        <Routes>
          
          <Route path="/" element={<BrochurePage />} />
          <Route path="/es" element={<EsBrochurePage />} />
            <Route path="/trifold" element={<TriFoldPage />} />
          <Route path="/brochure-inside" element={<BrochureInside />} />
          <Route path="/patient-postcard" element={<PatientPostcardPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/prescriber-portal" element={<PrescriberPortalPage />} />
          <Route path="/patient-resources" element={<PatientResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;