import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./Pages/login-page";
import Background from "./components/Background";
import EventsGrid from "./components/EventsGrid";
import HeroComponent from "./components/HeroComponent";
import UserDashboard from "./Pages/user-dashboard";
import HostCreateEvent from "./Pages/HostCreateEvent";

// Create a Layout component for the main content
const Layout = () => {
  return (
    <>
      <Background />
      <Navbar />
      <HeroComponent />
      <EventsGrid />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/host/create-event" element={<HostCreateEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
