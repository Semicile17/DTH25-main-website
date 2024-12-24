export default function Header(){
    return(
        <header className="w-full md:flex hidden sticky justify-center">
           <nav className="bg-blue-500/60 m-5 h-16 w-[60%] rounded-full">
            <ul className="flex w-full h-full text-2xl font-lilita justify-evenly items-center ">
              <li className="cursor-pointer hover:text-black duration-300">Home</li>
              <li className="cursor-pointer hover:text-black duration-300">About DTH</li>
              <li className="cursor-pointer hover:text-black duration-300">Leaderboard</li>
              <li className="cursor-pointer hover:text-black duration-300">Profile</li>
            </ul>
           </nav>
        </header>
    )
}