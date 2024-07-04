import React, { useEffect, PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import useGoogleAnalytics, { trackingId } from '../hooks/useGoogleAnalytics';

const GoogleAnalyticsProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const { trackPageView } = useGoogleAnalytics();
    const location = useLocation();

    useEffect(() => {
        if (trackingId) {
            try {
                trackPageView(location.pathname + location.search);
            } catch (error) {
                // Recommend: reporting this error to an error tracking service
                console.log("Error executing trackPageView Google Analytics", { Error: error });
            }
        }
    }, [location, trackPageView]);
    // Remark: this allows GoogleAnalyticsProvider to wrap other components without affecting the UI
    return <>{children}</>;
}

export default GoogleAnalyticsProvider;