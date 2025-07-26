import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./Pages/login-page";
import Background from "./components/Background";


// Create a Layout component for the main content
const Layout = () => {
  return (
    <>
      <Background />
      <Navbar />
      <div className="bg-background-primary flex h-[2000px] justify-center overflow-hidden">
        [content goes here]
      </div>
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