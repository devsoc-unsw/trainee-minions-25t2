import { User, Edit } from "lucide-react";
import UserEventsGrid from "../components/UserEventsGrid";

export default function UserDashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-cover bg-center">
      {/* Profile Header */}
      <div className="flex w-full justify-center">
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
                  <div className="text-lg font-bold text-black uppercase">
                    LOUIS LIM
                  </div>
                  <div className="text-sm text-black text-gray-400 lowercase italic">
                    lim.b@email.com
                  </div>
                </div>
              </div>

              {/* Right side - Edit button */}
              <button className="font-large h-12 w-42 cursor-pointer rounded-md bg-gray-100 bg-red-500 px-4 py-2 text-sm text-gray-700 text-white transition-colors hover:bg-red-300">
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
      <div className="mb-8 w-full px-4">
        <UserEventsGrid></UserEventsGrid>
      </div>
    </div>
  );
}
