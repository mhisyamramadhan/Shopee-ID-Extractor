import React, { useState } from 'react';


function Content() {
    const [link, setLink] = useState('');
    const [productID, setProductID] = useState('');
    const [shopID, setShopID] = useState('');
    const [copiedSID, setCopiedSID] = useState(false);
    const [copiedPID, setCopiedPID] = useState(false);

    const handleLinkChange = (event) => {
        setLink(event.target.value);
      
        const links = event.target.value.split('\n'); // Split the input value into an array of links
      
        const extractedProductIDs = [];
        const extractedShopIDs = [];
      
        // Proses link untuk mendapatkan Product ID dan Shop ID
        const linkRegex1 = /i\.(\d+)\.(\d+)/;
        const linkRegex2 = /(\d+)\/(\d+)/;
        const linkRegex3 = /xx-i\.(\d+)\.(\d+)/;
      
        links.forEach((link) => {
          const match1 = link.match(linkRegex1);
          const match2 = link.match(linkRegex2);
          const match3 = link.match(linkRegex3);
      
          if (match1) {
            extractedProductIDs.push(match1[2]);
            extractedShopIDs.push(match1[1]);
          } else if (match2) {
            extractedProductIDs.push(match2[2]);
            extractedShopIDs.push(match2[1]);
          } else if (match3) {
            extractedProductIDs.push(match3[2]);
            extractedShopIDs.push(match3[1]);
          } else {
            extractedProductIDs.push('');
            extractedShopIDs.push('');
          }
        });
      
        // Update the state with the extracted Product IDs and Shop IDs
        setProductID(extractedProductIDs.join('\n')); // Join the array of IDs with line breaks
        setShopID(extractedShopIDs.join('\n')); // Join the array of IDs with line breaks
    };

    const handleCopyClickSID = (text) => {
        navigator.clipboard.writeText(text);
        setCopiedSID(true);

        setTimeout(() => {
        setCopiedSID(false);
        }, 1000);
    };

    const handleCopyClickPID = (text) => {
        navigator.clipboard.writeText(text);
        setCopiedPID(true);

        setTimeout(() => {
        setCopiedPID(false);
        }, 1000);
    };

    const handleResetLink = () => {
        setLink('');
        setProductID('');
        setShopID('');
    }

    return (
      <>
            <div className="h-full py-[100px] flex justify-center items-center">
                <div className="flex flex-col w-1/2 gap-6 p-10 rounded-3xl bg-[#ffffff]" style={{boxShadow: '3px 3px 16px -4px rgba(0,0,0,0.28)'}}>
                    <div className="w-auto">
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900">
                            <p className="text-[20px]">Link</p>
                        </label>
                        <textarea 
                            id="message" 
                            rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-xl border border-gray-400 focus:outline-none focus:border-[#f15429]" 
                            placeholder="Please Input link URL here..."
                            value={link}
                            onChange={handleLinkChange}>
                        </textarea>
                        <button 
                            className="mt-2 mt-2 py-[3px] px-[9px] border border-[#f15429] bg-[#feefe8] rounded-full transition-all active:bg-[#f15429]/20 hover:shadow-lg flex items-center justify-center gap-1" 
                            data-ripple-light="true"
                            onClick={handleResetLink}>
                            <svg class="h-4 w-4 text-[#f15429]"  fill="none" viewBox="0 0 22 22" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                            </svg>
                            <p className="text-[15px] text-[#f15429]">Reset</p>

                        </button>
                    </div>
                    

                    <div className="flex w-auto gap-6">
                        <div className="relative w-full min-w-[200px]">
                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900">
                                <p className="text-[20px]">Shop ID</p>
                            </label>

                            <textarea 
                                id="message" 
                                rows="8" 
                                className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-xl border border-gray-400 focus:outline-none"
                                value={shopID}
                                readOnly>
                            </textarea>

                            <div className='flex'>
                                <button 
                                    className="mt-2 py-[4px] px-[10px] border border-[#f15429] bg-[#feefe8] rounded-full transition-all active:bg-[#f15429]/20 hover:shadow-lg flex items-center justify-center gap-[2px]" 
                                    data-ripple-light="true"
                                    onClick={() => handleCopyClickSID(shopID)}>
                                    <svg class="h-5 w-5 text-[#f15429]"  fill="none" viewBox="0 0 22 22" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
                                    </svg>
                                    <p className="text-[15px] text-[#f15429]">Copy</p>
                                </button>

                                <div className='ml-2 mt-2 flex items-center justify-center'>
                                    <p className={`${copiedSID ? 'text-green-600 text-[11px]' : 'text-[#f15429]'}`}>{copiedSID ? 'Copy Successfully!' : ''}</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full min-w-[200px]">
                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900">
                                <p className="text-[20px]">Product ID</p>
                            </label>

                            <textarea 
                                id="message" 
                                rows="8" 
                                className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-xl border border-gray-400 focus:outline-none"
                                value={productID}
                                readOnly>
                            </textarea>

                            <div className='flex'>
                                <button 
                                    className="mt-2 py-[4px] px-[10px] border border-[#f15429] bg-[#feefe8] rounded-full transition-all active:bg-[#f15429]/20 hover:shadow-lg flex items-center justify-center gap-[2px]" 
                                    data-ripple-light="true"
                                    onClick={() => handleCopyClickPID(productID)}>
                                    <svg class="h-5 w-5 text-[#f15429]"  fill="none" viewBox="0 0 22 22" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
                                    </svg>
                                    <p className="text-[15px] text-[#f15429]">Copy</p>
                                </button>

                                <div className='ml-2 mt-2 flex items-center justify-center'>
                                    <p className={`${copiedPID ? 'text-green-600 text-[11px]' : 'text-[#f15429]'}`}>{copiedPID ? 'Copy Successfully!' : ''}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>   
      </>
    );
  }
  
  export default Content;