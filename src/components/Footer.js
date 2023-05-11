import React from 'react';
import Logo from '../assets/img/logo.png';

const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto text-white flex justify-between items-center'>
        <a href='/'>
          <img src={Logo} alt='logo img' />
        </a>
        Copyright &copy; 2023. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
