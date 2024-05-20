import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import ga from './google-analytics/ga-init';

const App: React.FC = () => {
  const location = useLocation();
// TODO: add useEffect with this logic to your App.tsx 
// If you prefer it more esthetic, you can implement it it as a component that return null (GARouteChangeTracker.tsx)
  useEffect(() => {
    ga.trackPageView(document.title, location.pathname + location.search);
  }, [location]);

  return (
    <Routes>
      {/* TODO: uncomment or remove GARouteChangeTracker in  your use case */}
      {/* <GARouteChangeTracker/> */}
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
