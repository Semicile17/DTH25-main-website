import { useEffect } from "react";
import { useAuth } from "@/utils/contexts/authContext";
import Header from "@/components/header";
import { useRouter } from "next/router";

export default function Profile() {
  const { user, isLoggedIn } = useAuth();
  const router = useRouter();
 

  const handleLogout = ()=>{
        // Remove token from localStorage
        localStorage.removeItem("token");
        isLoggedIn(false)
        // Redirect to /home
        router.push("/");
  }
  useEffect(() => {
    if (!isLoggedIn) {
      // Perform the redirect only on the client side
      window.location.href = '/login';
    }
  }, []); // Re-run when isLoggedIn changes

  if (!isLoggedIn) {
    // return null; // Optionally render nothing until the redirect happens
  }

  return (
    <>
    <Header/>
      <div className="w-full h-screen flex flex-col justify-center space-y-8 px-4 lg:px-12">
        {/* Welcome Header */}
        <div>
          <h1 className="text-center font-lilita text-2xl lg:text-5xl">
            Welcome, {user?.fullName || "User"}
          </h1>
        </div>

        {/* Info Section */}
        <div className="flex flex-col lg:flex-row items-center font-lilita justify-center lg:justify-evenly space-y-6 lg:space-y-0">
          {/* Text Details */}
          <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
            <h1 className="text-lg lg:text-2xl">
              Participant ID:{" "}
              <span className="text-blue-500">{user?.participantId}</span>
            </h1>
            <h1 className="text-lg lg:text-2xl">
              Email: <span className="text-blue-500">{user?.email}</span>
            </h1>
            <h1 className="text-lg lg:text-2xl">
              Team ID: <span className="text-blue-500">{user?.teamId}</span>
            </h1>
          </div>

          {/* Avatar */}
          <div className="bg-white rounded-full w-24 h-24 lg:w-32 lg:h-32"></div>
        </div>

        {/* Call-to-Action Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-y-4 lg:gap-x-4 font-lilita text-lg lg:text-2xl">
          <p className="text-center lg:text-left">Want to create a team?</p>
          <button className="bg-gradient-to-r from-blue-300 to-blue-600 text-white font-bold rounded-lg w-36 h-10 lg:w-44 lg:h-12">
            Make a team
          </button>
          <button
          onClick={handleLogout}
           className="bg-gradient-to-r from-red-200 to-red-500 w-36 h-10 lg:w-44 lg:h-12 rounded-lg">
            Logout
          </button>
        </div>

      </div>
    </>
  );
}
