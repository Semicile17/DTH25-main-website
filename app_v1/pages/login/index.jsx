import { useState ,useEffect} from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/utils/contexts/authContext';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();
  const { setIsLoggedIn, setUser , isLoggedIn} = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        // Store JWT in local storage
        localStorage.setItem('token', data.token);

        // Update AuthContext
        setIsLoggedIn(true);
        console.log(isLoggedIn)
        console.log("Hello")
        setUser({
          email: data.user.email,
          fullName: data.user.fullName,
          participantId: data.user.participantId,
          teamId: data.user.teamId,
        });

        // Redirect to profile page
        // router.push('/profile');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred during login.');
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      // Perform the redirect only on the client side
      window.location.href = '/profile';
    }
  }, [isLoggedIn]); // Re-run when isLoggedIn changes

  if (isLoggedIn) {
    return null; // Optionally render nothing until the redirect happens
  }

  return (
    <div className="w-full h-screen flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="space-y-4 md:space-y-12 w-full max-w-lg">
        <div className="font-lilita space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">Login</h1>
          <p className="font-serif text-center text-sm sm:text-base lg:text-xl">
            Login into your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:gap-6 gap-3 bg-blue-300/15 text-white p-6 rounded-md font-lilita"
        >
          {error && <p className="text-red-500 text-center">{error}</p>}

          {/* Email */}
          <label htmlFor="email" className="text-sm font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="semicile17@gmail.com"
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
            className="bg-gray-200 text-black px-3 py-2 rounded-lg border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Login Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-300 to-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>

        <div className="text-center text-sm sm:text-base lg:text-lg font-serif">
          Haven't joined yet?{' '}
          <span className="font-lilita hover:underline cursor-pointer">
            <Link href="/register">Register here</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
