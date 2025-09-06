import backgroundSvg from "../assets/royal-botanic-gardens-sydney-australia 1.svg";
import { GoogleLogin } from "@react-oauth/google";
import type { CredentialResponse } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleGoogleSuccess = (credentialResponse: CredentialResponse) => {
    console.log("Login Success:", credentialResponse);
    navigate('/user-dashboard');
  }

  const handleGoogleError = () => {
    console.log("Login Failed");
  }

  const handleEmailContinue = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email login attempted");
  }
  
  const toggleHeart = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className="flex min-h-screen w-full items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundSvg})` }}
    >
      <div className="flex h-[500px] w-[400px] flex-col rounded-lg bg-white p-8 shadow-lg">
        <div className="flex justify-end items-center gap-1 rounded-lg p-0 text-2xl font-bold text-red-500">
          <button
            className="rotate-20 cursor-pointer duration-300 hover:rotate-0 hover:animate-pulse"
            onClick={toggleHeart}
          >
            {!isClicked ? <Heart /> : <Heart fill="red" />}
          </button>
          <span className="cursor-default">link</span>
        </div>

        <div className="pt-6 pb-2 text-3xl font-bold text-gray-800">WELCOME!</div>
        <div className="pb-10 text-3xl font-bold text-gray-800">
          WHAT'S YOUR EMAIL?
        </div>

        <form onSubmit={handleEmailContinue} className="flex-1 flex flex-col">
          <input
            type="text"
            placeholder="Email"
            className="mb-8 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm"
          />
          <button className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
            Continue
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center mb-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <div className="px-3 text-sm text-gray-500">or</div>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Google OAuth Button */}
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            theme="outline"
            size="large"
            text="signin_with"
            shape="rectangular"
          />
        </div>
      </div>
    </div>
  );
}
