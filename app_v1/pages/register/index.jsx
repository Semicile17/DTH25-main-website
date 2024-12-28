import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/utils/contexts/authContext";
import { BeatLoader } from "react-spinners";

export default function Register() {
  const [formData, setFormData] = useState({
    instituteId: "",
    fullName: "",
    branch: "",
    year: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccessMessage("Registration successful! Redirecting to login...");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        setError(data.error || "Registration failed");
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("An error occurred during registration.");
    }
  };

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      // Perform the redirect only on the client side
      window.location.href = "/profile";
    }
  }, [isLoggedIn]); // Re-run when isLoggedIn changes

  if (isLoggedIn) {
    return null; // Optionally render nothing until the redirect happens
  }

  return (
    <div className="w-full h-screen flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="space-y-4 md:space-y-12 w-full max-w-lg">
        <div className="font-lilita space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
            Register Yourself
          </h1>
          <p className="font-serif text-center text-sm sm:text-base lg:text-xl">
            Join the competition by creating an account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:gap-6 gap-3 bg-blue-300/15 text-white p-6 rounded-md font-lilita"
        >
          {error && <p className="text-red-500 text-center">{error}</p>}
          {successMessage && (
            <p className="text-green-500 text-center">{successMessage}</p>
          )}

          {/* Institute ID */}
          <label htmlFor="instituteId" className="text-sm font-bold">
            Institute ID
          </label>
          <input
            id="instituteId"
            type="text"
            placeholder="Enter your institute ID"
            value={formData.instituteId}
            onChange={handleChange}
            className="bg-gray-200 text-black px-3 py-2 rounded-lg border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Full Name */}
          <label htmlFor="fullName" className="text-sm font-bold">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            className="bg-gray-200 text-black px-3 py-2 rounded-lg border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Branch and Year */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="branch" className="text-sm font-bold">
                Branch
              </label>
              <select
                id="branch"
                value={formData.branch}
                onChange={handleChange}
                className="bg-gray-200 text-black px-3 py-2 rounded-lg border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-400 w-full"
                required
              >
                <option value="" disabled>
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

            <div className="flex-1">
              <label htmlFor="year" className="text-sm font-bold">
                Year
              </label>
              <select
                id="year"
                value={formData.year}
                onChange={handleChange}
                className="bg-gray-200 text-black px-3 py-2 rounded-lg border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-400 w-full"
                required
              >
                <option value="" disabled>
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
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-200 text-black px-3 py-2 rounded-lg border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Register Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-300 to-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {loading ? <BeatLoader size={8} color="white" /> : "Register"}
          </button>
        </form>

        <div className="text-center text-sm sm:text-base lg:text-lg font-serif">
          Already registered?{" "}
          <span className="font-lilita hover:underline cursor-pointer">
            <Link href="/login">Login here</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
