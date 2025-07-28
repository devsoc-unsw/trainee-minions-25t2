import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./Pages/login-page";
import Background from "./components/Background";
import EventsGrid from "./components/EventsGrid";

// Create a Layout component for the main content
const Layout = () => {
  return (
    <>
      <Background />
      <Navbar />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
