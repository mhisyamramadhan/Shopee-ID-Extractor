import React from 'react';
import logo from './android-chrome-512x512.png';

function Header() {
    return (
      <>
      <div className="bg-[#f15429] h-[100px] flex items-center justify-center gap-1">
        <img src={logo} alt="Shopee Logo" className="h-12 w-12" />
        <h1 className="text-white font-bold text-4xl font-montserrat py-[4px] px-[10px]">
            ID Extractor
        </h1>
      </div>
      </>
    );
  }
  
  export default Header;