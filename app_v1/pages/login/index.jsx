import Link from "next/link";
export default function Login() {
    return (
      <div className="w-full h-screen flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="space-y-4 md:space-y-12 w-full max-w-lg">
          <div className="font-lilita space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">Login</h1>
            <p className="font-serif text-center text-sm sm:text-base lg:text-xl">
              Login into your account
            </p>
          </div>
          <form className="flex flex-col md:gap-6 gap-3 bg-blue-300/15 text-white p-6 rounded-md font-lilita">
            
  
            
  
           
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

             {/* Password */}
             <label htmlFor="password" className="text-sm font-bold">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder=". . . . . . . . . . ."
              className="bg-gray-200 text-black px-3 py-2 rounded-lg border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-400"
            />
  
            {/* Register Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-300 to-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </form>
  
          <div className="text-center text-sm sm:text-base lg:text-lg font-serif">
            Haven't joined yet? <span className="font-lilita hover:underline cursor-pointer"><Link href='/register'>Register here</Link></span>
          </div>
        </div>
      </div>
    );
  }
  