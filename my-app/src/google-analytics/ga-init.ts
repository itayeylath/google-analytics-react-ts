import ReactGA from 'react-ga4';
import generateClientIdGa from './ga-generate-client-id';

enum HitTypes {
    PageView = "pageview",
    Event = "event"
}

// TODO: add your GA_ID, recommend using .env
const trackingId = "<GA_ID>"

// The `ga` object encapsulates all Google Analytics related functionality
const ga = {
    // Initializes Google Analytics with the specified tracking ID
    initGoogleAnalytics() {
        if (!trackingId) {
            console.log(
                "No GA_ID is found for Google Analytics",
                { "GA_ID": trackingId }
            )
            return;
        }

        try {
            ReactGA.initialize([
                {
                    trackingId,
                    //TODO: in this use case it is not tracking the IP address and generate a random userId => make your own configurations                          
                    gaOptions: {
                        anonymizeIp: true, // Anonymizes the IP address
                        clientId: generateClientIdGa() // Generates a custom client ID
                    }
                }
            ]);
            // TODO: log your Errors. in this use case it is only print it locally. 
        } catch (error) {
            console.log(
                "Error initializing Google Analytics",
                { "Error": error }
            )
        }
    },
    
    // Sets a specific option for Google Analytics
    setOption(key: string, value: unknown) {
        ReactGA.set({ [key]: value });
    },

    // Sets the user ID for tracking purposes
    setUserId(userId: string | number) {
        this.setOption('userId', userId);
    },

    // Sends data to Google Analytics with the specified hit type and data
    sendData(type: HitTypes, data: Object) {
        ReactGA.send({ hitType: type, ...data });
    },

    // Tracks a page view with optional page title and path
    trackPageView(pageTitle?: string, pagePath?: string) {
        if (!pageTitle) {
            pageTitle = document.title; 
        }

        if (!pagePath) {
            pagePath = location.href; 
        }

        this.sendData(HitTypes.PageView, { page: pagePath, title: pageTitle });
    },

    // Tracks an event with the specified category, action, and optional label and value
    trackEvent(category: string, action: string, label?: string, value?: number) {
        ReactGA.event({ category, action, label, value });
    }
};

export default ga;
