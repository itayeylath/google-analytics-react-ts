import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import GoogleAnalyticsProvider from './providers/GoogleAnalyticsProvider';

const App: React.FC = () => {

  return (
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
