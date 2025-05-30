import { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react or use any icons you prefer

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = ['Save', 'Invest', 'Stories', 'FAQs', 'Resources'];

  return (
    <nav className="w-full">
      <div className="max-w-6xl mx-auto px-2 flex justify-between items-center">
        {/* Logo */}
        <div className="mt-6">
          <img src="/logo.svg" alt="Logo" />
        </div>

        {/* Desktop Nav Links */}
         <ul className="hidden md:flex gap-6 text-lg mt-6 font-medium text-[rgb(18,34,49)]">
          {navLinks.map((item) => (
            <li key={item}>
              <a href="#" className="">{item}</a>
            </li>
          ))}
        </ul> 

        {/* Auth Links (Desktop only) */}
       <div className="hidden md:flex gap-4 items-center mt-6">
          <a href="#" className="text-md text-[rgb(18,34,49)] border px-5 py-3 rounded-lg font-medium">Sign in</a>
          <button className="px-4 py-2 bg-[rgb(18,34,49)] text-white font-medium  rounded-md hover:cursor-pointer  text-lg">
            Create free account
          </button>
        </div> 

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-lg text-center font-semibold text-[rgb(18,34,49)]">
            {navLinks.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-600 block">{item}</a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <a href="#" className="text-lg text-center border rounded-md font-medium text-[rgb(18,34,49)]">Sign in</a>
            <button className="w-full px-4 py-2 bg-[rgb(18,34,49)] text-white rounded-md hover:cursor-pointer text-lg">
              Create free account
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
