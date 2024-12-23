import Header from "@/components/header";

export default function Profile() {
    return (
      <div className="w-full h-screen flex flex-col justify-start space-y-8 px-4 lg:px-12">
        <Header/>
        {/* Welcome Header */}
        <div>
          <h1 className="text-center font-lilita text-2xl lg:text-5xl">
            Welcome, Rohit Mahant
          </h1>
        </div>
  
        {/* Info Section */}
        <div className="flex flex-col lg:flex-row items-center font-lilita justify-center lg:justify-evenly space-y-6 lg:space-y-0">
          {/* Text Details */}
          <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
            <h1 className="text-lg lg:text-2xl">
              Participant ID: <span className="text-blue-500">PTNO23124</span>
            </h1>
            <h1 className="text-lg lg:text-2xl">
              Email: <span className="text-blue-500">rohitsinghmahant707@gmail.com</span>
            </h1>
            <h1 className="text-lg lg:text-2xl">
              Team ID: <span className="text-blue-500">TNO121245</span>
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
        </div>
      </div>
    );
  }
  