import ReactGA from 'react-ga4';
import generateClientIdGa from './ga-generate-client-id';

enum HitTypes {
    PageView = "pageview",
    Event = "event"
}

const trackingId = "<GA_ID>"

const ga = {
    initGoogleAnalytics() {

        if (!trackingId) {
            console.log(
                "No GA_ID is found for Google Analytics",
                { "GA_ID": trackingId }
            )
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
            console.log(
                "Error initializing Google Analytics",
                { "Error": error }
            )
        }
    },
    setOption(key: string, value: unknown) {
        ReactGA.set({ [key]: value });
    },
    setUserId(userId: string | number) {
        this.setOption('userId', userId);
    },
    sendData(type: HitTypes, data: Object) {
        ReactGA.send({ hitType: type, ...data });
    },
    trackPageView(pageTitle?: string, pagePath?: string) {
        if (!pageTitle) {
            pageTitle = document.title;
        }

        if (!pagePath) {
            pagePath = location.href;
        }

        this.sendData(HitTypes.PageView, { page: pagePath, title: pageTitle });
    },
    trackEvent(category: string, action: string, label?: string, value?: number) {
        ReactGA.event({ category, action, label, value });
    }
};

export default ga;