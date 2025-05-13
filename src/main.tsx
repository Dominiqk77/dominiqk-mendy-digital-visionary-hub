
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import EGovernance from './pages/services/EGovernance';
import SenServices from './pages/projects/SenServices';
import Services from './pages/Services';

createRoot(document.getElementById("root")!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/egouvernance" element={<EGovernance />} />
      <Route path="/services/e-governance" element={<EGovernance />} />
      <Route path="/projects/senservices" element={<SenServices />} />
      <Route path="*" element={<App />} />
    </Routes>
  </Router>
);
