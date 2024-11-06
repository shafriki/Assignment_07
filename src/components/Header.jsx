import React, { useState, useEffect } from 'react';

const Header = ({balance}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown') && !event.target.closest('#bar')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky top-0 bg-opacity-30 z-50 backdrop-blur-lg">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto py-4 px-3 md:px-2 lg:px-0">

        {/* logo */}
        <img src="https://i.ibb.co/s9fV0VP/logo.png" alt="Logo" />

        {/* nav menu */}
        <div className="md:flex items-center gap-12 text-base font-normal text-[#131313B3]">
          <div className="hidden md:flex items-center gap-12 text-base font-normal text-[#131313B3]">
            <a href="#" className="hover:border-b-2 hover:border-red-500 hover:transition-all hover:text-red-600">
              Home
            </a>
            <a href="#" className="hover:border-b-2 hover:border-red-500 hover:transition-all hover:text-red-600">
              Fixture
            </a>
            <a href="#" className="hover:border-b-2 hover:border-red-500 hover:transition-all hover:text-red-600">
              Teams
            </a>
            <a href="#" className="hover:border-b-2 hover:border-red-500 hover:transition-all hover:text-red-600">
              Schedules
            </a>
          </div>

          {/* balance display */}
          <div className="flex items-center gap-1 border-2 border-gray-300 py-1 px-2 rounded-md">
            <p className="text-xs lg:text-base font-semibold text-[#111111B3]">
              <span id="balance">{balance}</span> Coin
            </p>
            <img src="https://i.ibb.co/5XDnNQz/coin.png" alt="Coin" />
          </div>
        </div>

        {/* menu icon for mobile */}
        <i
          className="fa-solid fa-bars block md:hidden cursor-pointer"
          id="bar"
          onClick={toggleMenu}
        ></i>
      </nav>

      {/* mobile dropdown menu */}
      {isMenuOpen && (
        <div className="dropdown md:hidden flex flex-col items-start mt-2 absolute right-0 bg-white shadow-lg rounded-md z-50"
          style={{ top: '60px' }}>
          <a href="#" className="block w-full px-3 py-2 text-base font-normal text-[#131313B3] hover:border-b-2 hover:border-red-500 hover:text-red-500">Home</a>
          <a href="#" className="block w-full px-3 py-2 text-base font-normal text-[#131313B3] hover:border-b-2 hover:border-red-500 hover:text-red-500">Fixture</a>
          <a href="#" className="block w-full px-3 py-2 text-base font-normal text-[#131313B3] hover:border-b-2 hover:border-red-500 hover:text-red-500">Teams</a>
          <a href="#" className="block w-full px-3 py-2 text-base font-normal text-[#131313B3] hover:border-b-2 hover:border-red-500 hover:text-red-500">Schedules</a>
        </div>
      )}
    </div>
  );
};

export default Header;
