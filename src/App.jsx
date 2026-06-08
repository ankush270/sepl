import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HealthcarePage from './pages/HealthcarePage';
import EducationPage from './pages/EducationPage';
import BusinessPage from './pages/BusinessPage';
import LifestylePage from './pages/LifestylePage';
import RealEstatePage from './pages/RealEstatePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Helper component to auto-scroll window to top on page route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-accent/30 selection:text-primary flex flex-col justify-between overflow-x-hidden">
        <Header />
        
        {/* Dynamic page container */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/healthcare" element={<HealthcarePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/lifestyle" element={<LifestylePage />} />
            <Route path="/realestate" element={<RealEstatePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
