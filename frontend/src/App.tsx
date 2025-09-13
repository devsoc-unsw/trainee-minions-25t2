import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import LoginPage from "./Pages/login-page";
import Background from "./components/Background";
import EventsGrid from "./components/EventsGrid";
import HeroComponent from "./components/HeroComponent";
import UserDashboard from "./Pages/user-dashboard";
import EventDetails from "./components/EventDetails";
import Quiz from "./Pages/quiz/quiz-page";

interface SearchFilters {
  events: string;
  locations: string;
  tags: string[];
}

// Create a Layout component for the main content
const Layout = () => {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    events: "",
    locations: "",
    tags: [],
  });

  // Handle search from Navbar
  const handleSearch = (filters: SearchFilters) => {
    setSearchFilters(filters);
  };

  return (
    <>
      <Background />
      <Navbar onSearch={handleSearch} />
      <HeroComponent />
      <EventsGrid searchFilters={searchFilters} />
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
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
