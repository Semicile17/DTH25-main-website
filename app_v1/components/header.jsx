import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full flex justify-center">
      {/* Desktop Navbar */}
      <nav className="bg-blue-500/60 m-5 h-16 w-[60%] rounded-full hidden md:block">
        <ul className="flex w-full h-full text-2xl font-lilita justify-evenly items-center">
          <li className="cursor-pointer hover:text-black duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-black duration-300">
            About DTH
          </li>
          <li className="cursor-pointer hover:text-black duration-300">
            Leaderboard
          </li>
          <li className="cursor-pointer hover:text-black duration-300">
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="bg-blue-500/60 m-5 h-14 w-[70%] rounded-full md:hidden flex justify-between p-2 items-center">
        <div className="bg-black rounded-full h-12 w-12"></div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white  text-black flex justify-center items-center rounded-full h-12 w-12"
        >
          ☰
        </button>
      </nav>

      {/* Sidebar for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-blue-500 right-0 fixed w-64 h-full p-5 shadow-lg z-50"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sidebar
          >
            <div className="text-white flex justify-end text-2xl mb-4">
              <button onClick={() => setIsOpen(false)}>&times;</button>
            </div>
            <ul className="text-white font-lilita text-xl font-semibold space-y-10">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" onClick={() => setIsOpen(false)}>
                  About DTH
                </Link>
              </li>
              <li>
                <Link href="#leaderboard" onClick={() => setIsOpen(false)}>
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link href="/profile" onClick={() => setIsOpen(false)}>
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
