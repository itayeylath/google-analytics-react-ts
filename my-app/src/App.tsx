import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import GoogleAnalyticsProvider from './providers/GoogleAnalyticsProvider';

const App: React.FC = () => {

  return (
    // Remark: check in your App, the optimal placement for GoogleAnalyticsProvider-
    // to ensures early initialization to track all route changes but the errors still be captured (if you use an error tracking service)
    <GoogleAnalyticsProvider>
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
    </GoogleAnalyticsProvider >
  );
}

export default App;
