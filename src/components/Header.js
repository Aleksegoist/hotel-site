import React, { useEffect, useState } from 'react';
import Logo from '../assets/img/logo.png';

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });
  return (
    <header
      className={`${
        header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'
      } fixed z-50 w-full transition-all duration-300`}>
      <div className='container mx-auto'>
        <a href='/'>
          {header ? (
            <img className='w-[160px]' src={Logo} alt='logo' />
          ) : (
            <img className='w-[160px]' src={Logo} alt='logo' />
          )}
        </a>
      </div>
    </header>
  );
};

export default Header;
