import React, { useState } from 'react';

function Footer() {
    return (
      <>
        <div className='bg-blue-400 h-[80px]'>
          <div className="flex flex-col bg-[#ffffff] border-t-4 border-[#f15429] h-full text-center">
            <p style={{ color: '#f15429', fontWeight: 'bold', fontSize: '15px', fontFamily: 'monospace', backgroundColor: "#f5f5f5" }}>Contact</p>
            <div className='flex w-auto gap-2 justify-center bg-[#f5f5f5]'>
                <a href="https://www.linkedin.com/in/muhammad-hisyam-ramadhan/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#3463bc] pr-[5px] py-[1px] text-[12px] font-semibold text-white items-center rounded hover:bg-[#3463bc]/80">
                    <div className="flex item-center justify-center gap-0">
                      <svg className="py-1 px-1 w-5 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 17">
                        <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
                        <path d="M3 5.012H0V15h3V5.012Z"/>
                      </svg>

                      <p>| Linkedin</p>
                    </div>
      
                  </button>
                </a>

                <a href="https://github.com/mhisyamramadhan" target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#272727] pr-[5px] py-[1px] text-[12px] font-semibold text-white items-center rounded hover:bg-[#272727]/80">
                    <div className="flex item-center justify-center gap-0">
                      <svg className="py-1 px-1 w-5 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                      </svg>                
                      <p>| Github</p>
                    </div>
                  </button>
                </a>

                <a href="https://www.instagram.com/icaaam_/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#e1306c] pr-[5px] py-[1px] text-[12px] font-semibold text-white items-center rounded hover:bg-[#e1306c]/80">
                    <div className="flex item-center justify-center gap-0">
                    <svg class="py-1 px-1 w-5 h-5 text-white"  viewBox="0 0 23 23"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /> 
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                      <p>| Instagram</p>
                    </div>
                  </button>
                </a>
            </div>
          
          <p className="text-[#4a4a4a] mt-1 p-0 bg-[#ffffff] text-[10px]">Built by Muhammad Hisyam Ramadhan</p>
          <p className="text-[#4a4a4a] p-0 bg-[#ffffff] text-[10px]">Inspired by <a href="https://www.instagram.com/fdu_tom" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:underline hover:text-blue-400">Fajar Dwi Utomo</a></p>

          </div>
        </div>
      </>
    );
  }
  
  export default Footer;