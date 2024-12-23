import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
      <div className="h-screen w-full flex justify-center items-center">
         <div className="flex flex-col ">
            <p className="font-serif text-[12px] md:text-lg">Welcome to the</p>
            <h1 className="md:text-7xl text-3xl font-bold">Digital Treasure Hunt</h1>
            <p className="text-right font-serif text-[12px] md:text-lg">2025</p>
            <div className="flex justify-center">
            <button className="m-10 bg-gradient-to-r from-blue-300 to-blue-600 md:w-56 w-44 h-12  text-gray-700 font-bold rounded-xl ">Join the hunt</button>
            </div>
         </div>
      </div>
  );
}
