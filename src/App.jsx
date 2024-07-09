// src/App.jsx
import Dashboard from "./components/Dashboard";
import { LocationProvider } from "./contexts/DataContext";
import { InputProvider } from "./contexts/InputContext";
import { WeatherProvider } from "./contexts/WeatherContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <Router basename="/Atmos">
      <InputProvider>
        <LocationProvider>
          <WeatherProvider>
            <Routes>
              <Route path="/*" element={<Dashboard />} />
            </Routes>
          </WeatherProvider>
        </LocationProvider>
      </InputProvider>
    </Router>
  );
}

export default App;
