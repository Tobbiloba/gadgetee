import React from 'react';
import {AiOutlineTwitter, AiOutlineWhatsApp, AiOutlineInstagram} from 'react-icons/ai'
import TranslatedText from './TranslatedText';
import Dropdown from './Dropdown';
const Topbar = () => {
    const currencies = [
        {
            id: 1,
            text: 'USD $',
        },
        {
            id: 2,
            text: 'NGN ₦',
        },
        {
            id: 3,
            text: 'GBP £',
        },
        {
            id: 4,
            text: 'EUR €',
        },
    ]

    const languages = [
        {
            id: 1,
            text: 'English',
            symbol: 'en'
        },
        {
            id: 2,
            text: 'French',
            symbol: 'fn'
        }
    ]
  return (
    <div className='flex flex-row h-[3.5rem] md:h-[2rem] justify-between contain bg-blue-900 items-center'>
        <div className='flex text-white text-[18px] gap-1 md:gap-3'>
            <AiOutlineInstagram />
            <AiOutlineTwitter />
            <AiOutlineWhatsApp />
        </div>

        <div>
            <TranslatedText className='text-white sans text-[14px]' text='Welcome to our store'/>
            

        </div>

        <div className='flex flex-col md:flex-row gap-1 md:gap-3 text-white text-[14px] sans'>
        <Dropdown type="filled" items={currencies}/>
        <Dropdown type="filled" items={languages}/>
        </div>
    </div>
  );
}

export default Topbar;
