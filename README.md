# Google Analytics With React Typescript

## Overview :eyes:
### what is GA :interrobang: :hushed:
Google Analytics (GA) is a powerful tool for tracking and analyzing website traffic and user behavior.

 **Here's how it operates:**

GA collects data from your website using a JavaScript tracking code that you embed in your site’s pages. This code gathers information about your visitors and sends it to Google's servers, where it is processed and made available in various reports.

## How's the implematneion Work?

`useGoogleAnalytics.ts`  as custom hook is the **primary** file for integrating with GA.
We're using an object to handle GA integration for flexibility and future-proofing.

**This approach allows us to:** :recycle: 

* Support multiple: functionalities, easily manage page views, event tracking, and post-initialization configurations.

* Future proofing: If we switch from ReactGA to another solution (e.g., a future GA version), we only need to update this object, not every instance in our codebase.

**Why This Approach?**

* React Way: This method aligns with React’s best practices by using a component to handle side effects.

* Future-Proofing: Wrapping the App component with GAInitializer means that any changes to GA initialization only need to be made in one place.

## Comments In th code
Search it on the App `// Recommend:` and `// Remark:` to understand logic and getting the implantation better in your App!


## 2 Ways Of Implementation

### 1 . General Tracking (the current repo) :sunglasses:

:muscle: **Pros:**
* Simple Initialization: Your setup ensures that Google Analytics is initialized only once when the GAInitializer component mounts.
* Page View Tracking: By providing a method to track page views, you can manually ensure that each page visit is logged.
* Custom Events: The trackEventBuilder method offers flexibility to track various user interactions.

:-1: **Cons:**
* Manual Page View Tracking: Since you're only wrapping the App component and not each route change, you must manually call trackPageView on each route change, which is prone to human error if forgotten.
* Lack of Route Change Tracking: Without automatic tracking of route changes, you might miss logging some page views if trackPageView is not called explicitly in each component.
* Limited User Context: Your implementation does not track detailed user interactions or demographic data beyond what GA collects by default.

### 2. Add Event Tracking Function To EVERY Event We Want To Track :sleeping:

:muscle: **Pros:**

* Granular Control: you have precise control over exactly which events are tracked and how they are labeled, allowing for very detailed and specific analytics data.
* Customization: each event can be customized with specific category, action, label, and value, providing rich insights into user behavior and interactions.

:-1: **Cons:**

* Maintenance Overhead: as your application grows, managing numerous individual tracking calls can become time-consuming and difficult to maintain consistently.
* Code Duplication: you might end up repeating similar tracking code across multiple components or functions, leading to less DRY (Don't Repeat Yourself) code.

## References :copyright:


[Medium: 'Implementing Google Analytics to React with TypeScript'](https://undercontr.medium.com/implementing-google-analytics-to-react-with-typescript-d36909726b38)


[YouTube: 'Add Google Analytics in React JS'](https://www.youtube.com/watch?v=iX0nulueBvU)


