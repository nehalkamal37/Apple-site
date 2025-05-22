import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PrescriberPortalPage from './pages/PrescriberPortalPage';
import PatientResourcesPage from './pages/PatientResourcesPage';
import ContactPage from './pages/ContactPage';
import PrivacyNoticePage from './pages/PrivacyNoticePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/prescriber-portal" element={<PrescriberPortalPage />} />
          <Route path="/patient-resources" element={<PatientResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-notice" element={<PrivacyNoticePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;