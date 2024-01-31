import { Link } from "react-router-dom";

import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { useSelector } from "react-redux";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-black p-4">
      <div
        className="container mx-auto flex justify-between items-center  "
        style={{ zIndex: "1" }}
      >
        <Link to="/" className="text-white font-bold text-xl">
         {
          currentUser ? `Welcome ${currentUser.userName}` : 'Home'
         }
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 mr-5">
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <div
          
            className="text-white hover:text-gray-300 relative"
          >
           {
            currentUser ? (
              <Link to='/profile'>

                <img className="rounded-full w-8 h-8 object-cover" src={currentUser?.profilePicture} alt="" />
              </Link>
            ):(
              <Link to='/sign-in'>
                Sign In
              </Link>
            )
           }
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="focus:outline-none bg-black text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <RxCross2 size={30} /> : <IoMenuSharp size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black transition-opacity duration-300 ease-in-out opacity-100">
            <div className="flex flex-col items-center space-y-4 p-4">
              <Link to="/about" className="text-white hover:text-gray-300">
                About
              </Link>
              <Link
                to="/sign-in"
                className="text-white hover:text-gray-300 relative"
              >
              {currentUser ? 'Sign out' : 'Sign in'}
            
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
