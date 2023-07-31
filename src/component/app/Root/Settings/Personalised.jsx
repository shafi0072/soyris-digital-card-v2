import React, { useRef, useState } from 'react';

const Personalised = ({setUrl,handleUrl}) => {
    const inputRef = useRef(null);
    
    // function for copy text --------------
    const [isCopied, setIsCopied] = useState(false);
     const handleCopyClick = () => {
        if (inputRef.current) {
          inputRef.current.select();
          document.execCommand('copy');
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1000);
        }
      };
      
      // handle change ---------------
      const permanentUrl = "https://easycard.pro/profile/"; // The permanent URL
      const [inputValue, setInputValue] = useState('');
    
      const handleInputChange = (e) => {
        setUrl(e.target.value)
        const inputValue = (e.target.value).slice(29);
        setInputValue(inputValue)

      };
    
    return (
        <div className='my-8'>
            <h2 className='text-lg font-semibold'>Personalised URL</h2>
            <p className='mt-2 text-md'>Your unique URL is the one below. Click edit to personalise this.</p>
            <div action="" className='mt-5'>
                <div className="flex gap-3 items-center">
                    <input onChange={handleInputChange} value={permanentUrl + inputValue}   ref={inputRef} type="text" className='px-2 py-1 shadow-lg rounded w-[306px] text-[17px] font-medium'  name="url" id="" />
                    <span className='cursor-pointer' onClick={handleCopyClick} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
                            <path id="copy-svgrepo-com_1_" data-name="copy-svgrepo-com (1)" d="M19.917,15.833h1.75A2.333,2.333,0,0,0,24,13.5V5.333A2.333,2.333,0,0,0,21.667,3H13.5a2.333,2.333,0,0,0-2.333,2.333v1.75M5.333,11.167H13.5A2.333,2.333,0,0,1,15.833,13.5v8.167A2.333,2.333,0,0,1,13.5,24H5.333A2.333,2.333,0,0,1,3,21.667V13.5A2.333,2.333,0,0,1,5.333,11.167Z" transform="translate(-2 -2)" fill="none" stroke="#0277b5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </svg>
                    </span>
                    {isCopied && <p style={{ color: 'green' }}>Copied!</p>}
                </div>
            </div>
            <button onClick={handleUrl} className='mt-4 bg-[#0277B5] text-sm text-white px-3 py-1 rounded'>EDIT</button>
        </div>
    );
};

export default Personalised;