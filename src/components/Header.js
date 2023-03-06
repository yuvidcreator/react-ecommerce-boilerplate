import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';

const Header = () => {

  
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemQty } = useContext(CartContext);
  
  // const [isActive, setIsActive] = useState(false);
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     window.screenY > 60 ? setIsActive(true) : setIsActive(false);
  //   });
  // }, []);

  return (
    <header 
    // className={`${isActive ? 'bg-pink-300' : 'bg-gray-200'} fixed w-full z-10 transition-all shadow-lg`}
    className="fixed w-full z-10 transition-all bg-gray-200 shadow-lg"
    >
      <div className="flex container items-center justify-between mx-auto h-[72px]">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <img src={Logo} alt={"Logo"} className="w-[40px]" />
          </div>
        </Link>

        {/* Cart */}
        <div
          onClick={()=>setIsOpen(!isOpen)}
          className="cursor-pointer flex relative max-w-[50px]"
        >
          <BsBag className="text-2xl text-gray-700" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">{itemQty}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
