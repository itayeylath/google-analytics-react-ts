import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import ga from './google-analytics/ga-init';

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    ga.trackPageView(document.title, location.pathname + location.search);
  }, [location]);

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <div>
            Google Analytics React TypeScript
          </div>
        } 
      />
    </Routes>
  );
}

export default App;
