import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { v4 as uuidv4 } from 'uuid';

enum HitTypes {
    PageView = "pageview",
}

const trackingId = "<GA_ID>";
const gaClientStorageKey = "ga-gtag-client-id";

const generateClientIdGa = () => {
    let clientId = localStorage.getItem(gaClientStorageKey);
    
    if (!clientId) {
        clientId = uuidv4();
        localStorage.setItem(gaClientStorageKey, clientId);
    }

    return clientId;
};

const useGoogleAnalytics = () => {

  useEffect(() => {
    if (!trackingId) {
      console.log("No GA_ID is found for Google Analytics", { GA_ID: trackingId });
      return;
    }
    try {
      ReactGA.initialize([
        {
          trackingId,
          gaOptions: {
            anonymizeIp: true,
            clientId: generateClientIdGa()
          }
        }
      ]);
    } catch (error) {
      console.log("Error initializing Google Analytics", { Error: error });
    }
  }, []);

  const setOption = (key: string, value: unknown) => {
    ReactGA.set({ [key]: value });
  };

  const setUserId = (userId: string | number) => {
    setOption("userId", userId);
  };

  const sendData = (type: HitTypes, data: Object) => {
    ReactGA.send({ hitType: type, ...data });
  };

  const trackPageView = ( pagePath?: string) => {


    if (!pagePath) {
      pagePath = location.href;
    }

    sendData(HitTypes.PageView, { page: pagePath });
  };

  const trackEvent = (category: string, action: string, label?: string, value?: number) => {
    ReactGA.event({ category, action, label, value });
  };

  return {
    setOption,
    setUserId,
    trackPageView,
    trackEvent,
  };
};

export default useGoogleAnalytics;