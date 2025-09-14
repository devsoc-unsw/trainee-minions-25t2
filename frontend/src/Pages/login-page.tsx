import { useState, useEffect } from "react";
import axios from "axios";
import { PORT } from "../../../backend/config.json";
import { Link, useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import backgroundSvg from "../assets/royal-botanic-gardens-sydney-australia 1.svg";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [isClicked, setIsClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [gender, setGender] = useState("");
  const [otherGender, setOtherGender] = useState("");
  const [sexuality, setSexuality] = useState("");
  const [otherSexuality, setOtherSexuality] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("sessionId")) {
      // alert("User is already logged in.");
      navigate("/user-dashboard");
    }
  }, []);


  const handleEmailLogin = async (e) => {
    e.preventDefault();
    console.log("Email login attempted with:", { email, password });
    try {
      const response = await axios.post(`http://localhost:${PORT}/user/login`, {
        email: email,
        password: password,
      });

      const data = {
        email,
        loginTime: new Date(),
      };
      const dataString = JSON.stringify(data);
      localStorage.setItem("userData", dataString);

      localStorage.setItem("sessionId", response.data);
      navigate("/user-dashboard");
    } catch (err) {
      console.error(err);
    }

    // Simulate failed login for demonstration
    // setErrorMessage("Account not found. Please check your credentials or sign up for a new account.");
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("Signup attempted with:", { username, email, password });
    setErrorMessage("");

    try {
      const response = await axios.post(
        `http://localhost:${PORT}/user/register`,
        { username: username, email: email, password: password, gender: gender, sexuality: sexuality }
      );
      localStorage.setItem("sessionId", response.data.sessionId);
      const data = {
        email,
        loginTime: new Date(),
      };
      const dataString = JSON.stringify(data);
      localStorage.setItem("userData", dataString);
      navigate('/user-dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  const toggleHeart = () => {
    setIsClicked(!isClicked);
  };

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setErrorMessage("");
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <div
      className="flex min-h-screen w-full items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundSvg})` }}
    >
      <div className="relative z-10 flex w-[400px] flex-col rounded-2xl bg-white p-8 shadow-2xl">
        {/* Heart Link Header */}
        <div className="flex justify-end items-center gap-1 mb-6">
          <button
            className="rotate-20 cursor-pointer duration-300 hover:rotate-0 hover:animate-pulse transition-all"
            onClick={toggleHeart}
          >
            <Heart
              className={`w-6 h-6 ${isClicked ? 'fill-red-500 text-red-500' : 'text-red-500'}`}
            />
          </button>
          <span className="cursor-default text-xl font-bold text-red-500">link</span>
        </div>

        {/* Login Form Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome!</h1>

          {/* Tab Navigation */}
          <div className="flex rounded-lg bg-gray-100 p-1">
            <button
              className={`flex-1 rounded-md py-2 px-4 text-sm font-medium transition-colors ${activeTab === "login"
                ? "bg-red-600 text-white shadow-sm"
                : "text-gray-600 hover:text-gray-800"
                }`}
              onClick={() => handleTabSwitch("login")}
            >
              Login
            </button>
            <button
              className={`flex-1 rounded-md py-2 px-4 text-sm font-medium transition-colors ${activeTab === "signup"
                ? "bg-red-600 text-white shadow-sm"
                : "text-gray-600 hover:text-gray-800"
                }`}
              onClick={() => handleTabSwitch("signup")}
            >
              Signup
            </button>
          </div>
        </div>

        {/* Login/Signup Form */}
        <div className="space-y-4 h-[500px]">
          {/* Error Message */}
          {errorMessage && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200">
              <p className="text-sm text-red-600">{errorMessage}</p>
            </div>
          )}

          {activeTab === "signup" && (
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all"
                required
              />
            </div>
          )}

          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all"
              required
            />
          </div>

          {activeTab === "signup" && (
            <div className="flex flex-col space-y-3">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all"
                required
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
                <option value="other">Other</option>
              </select>

              {gender === "other" && (
                <input
                  type="text"
                  placeholder="Please specify"
                  value={otherGender}
                  onChange={(e) => setOtherGender(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all"
                  required
                />
              )}
            </div>
          )}

          {activeTab === "signup" && (
            <div className="flex flex-col space-y-3">
              <select
                value={sexuality}
                onChange={(e) => setSexuality(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all"
                required
              >
                <option value="" disabled>
                  Select your sexuality
                </option>
                <option value="straight">Straight</option>
                <option value="bisexual">Bisexual / Pansexual</option>
                <option value="gay">Gay / Lesbian</option>
                <option value="other">Other</option>
              </select>

              {sexuality === "other" && (
                <input
                  type="text"
                  placeholder="Please specify"
                  value={otherSexuality}
                  onChange={(e) => setOtherSexuality(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all"
                  required
                />
              )}
            </div>
          )}

          {/* Forgot Password Link - Only show on login */}
          {activeTab === "login" && (
            <div className="text-left">
              <a href="#" className="text-sm text-red-600 hover:text-red-800 hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          {/* Action Button */}
          <button
            type="submit"
            onClick={activeTab === "login" ? handleEmailLogin : handleSignup}
            className="w-full rounded-lg bg-red-600 py-3 text-white font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors hover:cursor-pointer"
          >
            {activeTab === "login" ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}