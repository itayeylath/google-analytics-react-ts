import { useEffect } from 'react';
import ReactGA from 'react-ga4';

// Recommend: implement it with env variables to keep it as a secret 
export const trackingId = "GA_ID"
const appVersion = "APP_VERSION"
// Remark: use user ID in your app to make the analyze better
// Recommend: implement it with Redux 
const id = "user-id"

const useGoogleAnalytics = () => {

  useEffect(() => {
    if (trackingId) {
      try {
        ReactGA.initialize([
          {
            trackingId,
            gaOptions: {
              anonymizeIp: true,
              clientId: id
            }
          }
        ]);
        ReactGA.set({ app_version: appVersion });
      } catch (error) {
        // Recommend: reporting this error to an error tracking service
        console.log("Error initializing Google Analytics", { Error: error });
      }
    }
  }, [id]);

  const setOption = (key: string, value: unknown) => {
    ReactGA.set({ [key]: value });
  };

  const setUserId = (userId: string | number) => {
    setOption("userId", userId);
  };

  const sendData = (type: string, data: Object) => {
    ReactGA.send({ hitType: type, ...data });
  };

  const trackPageView = (pagePath?: string) => {
    if (!pagePath) {
      pagePath = location.href;
    }

    setOption('app_version', appVersion);
    sendData("pageview", { page: pagePath });
  };

  const trackEvent = (category: string, action: string, label?: string, value?: number) => {
    setOption('app_version', appVersion);
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