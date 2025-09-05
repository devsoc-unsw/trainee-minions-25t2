import { User, Edit } from "lucide-react";
import UserEventsGrid from "../components/UserEventsGrid"

export default function UserDashboard() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-cover bg-center">
      {/* Profile Header */}
      <div className="flex justify-center w-full">
        <div className="w-full max-w-4xl px-6">
          <div className="mt-24 mb-8">
            <div className="flex items-center justify-between rounded-lg bg-white p-6 shadow-lg">
              {/* Left side - Profile info */}
              <div className="flex items-center space-x-4">
                {/* Icon Placeholder */}
                <div className="rounded-full bg-gray-100 p-3">
                  <User className="h-22 w-22" />
                </div>
                {/* Profile Placeholder */}
                <div className="ml-6">
                  <div className="text-lg font-bold text-black uppercase">LOUIS LIM</div>
                  <div className="text-sm text-black lowercase text-gray-400 italic">lim.b@email.com</div>
                </div>
              </div>
              
              {/* Right side - Edit button */}
              <button className="bg-red-500 rounded-md bg-gray-100 px-4 py-2 text-sm font-large text-gray-700 hover:bg-red-300 transition-colors cursor-pointer w-42 h-12 text-white">
                <div className="flex items-center space-x-2">
                  <Edit className="h-6 w-6" />
                  <span className="text-lg">Edit Profile</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Hosts' Events Grid */}
      <div className="w-full px-4 mb-8">
        <UserEventsGrid></UserEventsGrid>
      </div>
    </div>
  )
}