import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ga from './ga-init';

const GARouteChangeTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    ga.trackPageView(document.title, location.pathname + location.search);
  }, [location]);

  return null;
};

export default GARouteChangeTracker;
