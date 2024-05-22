import React, { useEffect, PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import useGoogleAnalytics from '../hooks/useGoogleAnalytics';

const GoogleAnalyticsProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const { trackPageView } = useGoogleAnalytics();
    const location = useLocation();
    
    useEffect(() => {
        trackPageView(location.pathname + location.search);
    }, [location, trackPageView]);

    return <>{children}</>;
}

export default GoogleAnalyticsProvider;