import Link from "next/link";
export default function Register() {
    return (
      <div className="w-full h-screen flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="space-y-4 md:space-y-12 w-full max-w-lg">
          <div className="font-lilita space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">Register yourself</h1>
            <p className="font-serif text-center text-sm sm:text-base lg:text-xl">
              Register yourself to join the competition
            </p>
          </div>
          <form className="flex flex-col md:gap-6 gap-3 bg-blue-300/15 text-white p-6 rounded-md font-lilita">
            {/* Institute ID */}
            <label htmlFor="institute-id" className="text-sm font-bold">
              Institute Id
            </label>
            <input
              id="institute-id"
              type="text"
              placeholder="2300245"
              className="bg-gray-200 text-black px-3 py-2 rounded-lg border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-400"
            />
  
            {/* Full Name */}
            <label htmlFor="full-name" className="text-sm font-bold">
              Full Name
            </label>
            <input
              id="full-name"
              type="text"
              placeholder="Rohit Mahant"
              className="bg-gray-200 text-black px-3 py-2 rounded-lg border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-400"
            />
  
            {/* Branch and Year */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Branch Dropdown */}
              <div className="flex-1">
                <label htmlFor="branch" className="text-sm font-bold">
                  Branch
                </label>
                <select
                  id="branch"
                  className="bg-gray-200 text-black px-3 py-2 rounded-lg border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-400 w-full"
                >
                  <option value="" disabled selected>
                    Select your branch
                  </option>
                  <option value="CSE">CSE</option>
                  <option value="AIML">AIML</option>
                  <option value="CE">CE</option>
                  <option value="ME">ME</option>
                  <option value="EE">EE</option>
                  <option value="ECE">ECE</option>
                  <option value="BT">BT</option>
                </select>
              </div>
                                   
              {/* Year Dropdown */}
              <div className="flex-1">
                <label htmlFor="year" className="text-sm font-bold">
                  Year
                </label>
                <select
                  id="year"
                  className="bg-gray-200 text-black px-3 py-2 rounded-lg border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-400 w-full"
                >
                  <option value="" disabled selected>
                    Select your year
                  </option>
                  <option value="I">I</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                </select>
              </div>
            </div>
  
            {/* Email */}
            <label htmlFor="email" className="text-sm font-bold">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="semicile17@gmail.com"
              className="bg-gray-200 text-black px-3 py-2 rounded-lg border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-400"
            />
  
            {/* Register Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-300 to-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Register
            </button>
          </form>
  
          <div className="text-center text-sm sm:text-base lg:text-lg font-serif">
            ALready joined? <span className="font-lilita hover:underline cursor-pointer"><Link href='/login'>Login here</Link></span>
          </div>
        </div>
      </div>
    );
  }
  